package com.movies.application.dtos;

public class MovieDTO {

	private Long id;
	private String name;
	private String genre;
	private Integer release;

	public MovieDTO() {
	}

	public MovieDTO(Long id, String name, String genre, Integer release) {
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.release = release;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Integer getRelease() {
		return release;
	}

	public void setRelease(Integer release) {
		this.release = release;
	}

}
