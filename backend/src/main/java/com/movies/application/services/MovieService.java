package com.movies.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movies.application.dtos.MovieDTO;
import com.movies.application.entities.Movie;
import com.movies.application.repositories.MovieRepository;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;

	public MovieDTO findById(Long id) {
		return convertMovieToMovieDTO(movieRepository.findById(id).get());

	}

	public List<MovieDTO> findAll() {
		List<Movie> movies = movieRepository.findAll();

		if (movies.isEmpty()) {
			return null;
		}

		List<MovieDTO> moviesDTO = new ArrayList<>();

		for (Movie movie : movies) {
			moviesDTO.add(convertMovieToMovieDTO(movie));
		}

		return moviesDTO;
	}

	private MovieDTO convertMovieToMovieDTO(Movie movie) {
		MovieDTO movieDTO = new MovieDTO();
		movieDTO.setId(movie.getId());
		movieDTO.setName(movie.getName());
		movieDTO.setGender(movie.getGender());
		movieDTO.setRelease(movie.getRelease());

		return movieDTO;
	}

}
