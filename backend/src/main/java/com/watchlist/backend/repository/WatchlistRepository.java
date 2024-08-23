package com.watchlist.backend.repository;

import com.watchlist.backend.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WatchlistRepository extends JpaRepository<Movie, Long> {
    Optional<Movie> findByMovieId(Long movieId);

    Page<Movie> findAll(Pageable pageable);
}
