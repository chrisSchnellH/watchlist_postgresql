package com.watchlist.backend.controller;

import com.watchlist.backend.entity.Movie;
import com.watchlist.backend.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/watchlist")
@CrossOrigin("*")
public class WatchlistController {

    @Autowired
    private WatchlistService watchlistService;

    @GetMapping
    public List<Movie> getAll() {
        return watchlistService.findAll();
    }

    @PostMapping("/add")
    public Movie addToWatchlist(@RequestBody Movie movie) {
        return watchlistService.save(movie);
    }

    @DeleteMapping("/remove/{id}")
    public void removeFromWatchlist(@PathVariable Long id) {
        watchlistService.deleteById(id);
    }

    @GetMapping("/movie/{movie_id}")
    public Optional<Movie> getMovieByMovieId(@PathVariable("movie_id") Long movieId) {
        return watchlistService.findByMovieId(movieId);
    }

    @GetMapping("/paginated")
    public Page<Movie> getAllPaginated(@RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "20") int size) {
        return watchlistService.findAllPaginated(page, size);
    }
}
