package com.watchlist.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "movie_id")
    private Long movieId;

    @Column(name = "release_date")
    private String releaseDate;

    @Column(name = "title")
    private String title;

    @Column(name = "poster_path")
    private String posterPath;

}
