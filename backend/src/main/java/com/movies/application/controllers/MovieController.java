package com.movies.application.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movies.application.dtos.MovieDTO;
import com.movies.application.services.MovieService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

	@Autowired
	private MovieService movieService;

	@GetMapping(value = "/findbyid/{id}")
	public MovieDTO findById(@PathVariable Long id) {
		return movieService.findById(id);
	}
	
	@GetMapping
	public List<MovieDTO> findAll() {
		return movieService.findAll();
	}
	
	@PostMapping(value = "/createnewmovie")
	public ResponseEntity<String> createNewMovie(@RequestBody(required = false) MovieDTO movieDTO) {
		return movieService.createNewMovie(movieDTO);
	}

}
