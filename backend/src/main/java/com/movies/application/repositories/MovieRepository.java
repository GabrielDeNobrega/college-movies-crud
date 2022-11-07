package com.movies.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movies.application.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
