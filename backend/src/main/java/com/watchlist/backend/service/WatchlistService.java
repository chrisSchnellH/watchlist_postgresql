package com.watchlist.backend.service;

import com.watchlist.backend.entity.Movie;
import com.watchlist.backend.repository.WatchlistRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;

    public List<Movie> findAll() {
        return watchlistRepository.findAll();
    }

    public Movie save(Movie movie) {
        return watchlistRepository.save(movie);
    }

    public void deleteById(Long id) {
        if(!watchlistRepository.existsById(id)) {
            throw new EntityNotFoundException("Movie id " + id + "does not exist");
        }
        watchlistRepository.deleteById(id);
    }

    public Optional<Movie> findByMovieId(Long movieId) {
        return watchlistRepository.findByMovieId(movieId);
    }

    public Page<Movie> findAllPaginated(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return watchlistRepository.findAll(pageable);
    }
}


