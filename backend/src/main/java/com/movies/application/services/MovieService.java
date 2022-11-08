package com.movies.application.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	public ResponseEntity<String> createNewMovie(MovieDTO movieDTO) {

		if (movieDTO == null) {
			return new ResponseEntity<>("The movie's information was not reported.", HttpStatus.BAD_REQUEST);
		}

		List<Movie> movies = movieRepository.findAll();

		for (Movie movie : movies) {
			if (movie.getName().equals(movieDTO.getName())) {
				return new ResponseEntity<>("The movie informed already exists.", HttpStatus.BAD_REQUEST);
			}
		}

		if (movieDTO.getName().equals("") || movieDTO.getGenre().equals("")) {
			return new ResponseEntity<>("The movie's name and genre can't be empty.", HttpStatus.BAD_REQUEST);
		}

		if (movieDTO.getName() == null) {
			return new ResponseEntity<>("The movie's name can't be null.", HttpStatus.BAD_REQUEST);

		}

		if (movieDTO.getGenre() == null) {
			return new ResponseEntity<>("The movie's genre can't be null.", HttpStatus.BAD_REQUEST);

		}

		if (movieDTO.getRelease() == null) {
			return new ResponseEntity<>("The movie's release year can't be null.", HttpStatus.BAD_REQUEST);

		}

		if (movieDTO.getRelease() < 1895) {
			return new ResponseEntity<>("The movie's release year can't be before 1895.", HttpStatus.BAD_REQUEST);

		}

		if (movieDTO.getRelease() > 2500) {
			return new ResponseEntity<>("The movie's release date can't be after 2500.", HttpStatus.BAD_REQUEST);

		}

		movieRepository.save(convertMovieDTOToMovie(movieDTO));

		return new ResponseEntity<>("The movie " + movieDTO.getName() + " was created successfully.",
				HttpStatus.CREATED);
	}

	private Movie convertMovieDTOToMovie(MovieDTO movieDTO) {
		Movie movie = new Movie();
		movie.setId(movieDTO.getId());
		movie.setName(movieDTO.getName());
		movie.setGenre(movieDTO.getGenre());
		movie.setRelease(movieDTO.getRelease());

		return movie;
	}

	private MovieDTO convertMovieToMovieDTO(Movie movie) {
		MovieDTO movieDTO = new MovieDTO();
		movieDTO.setId(movie.getId());
		movieDTO.setName(movie.getName());
		movieDTO.setGenre(movie.getGenre());
		movieDTO.setRelease(movie.getRelease());

		return movieDTO;
	}

}
