package com.movies.application.dtos;

public class MovieDTO {

	private Long id;
	private String name;
	private String gender;
	private Integer release;

	public MovieDTO() {
	}

	public MovieDTO(Long id, String name, String gender, Integer release) {
		this.id = id;
		this.name = name;
		this.gender = gender;
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

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getRelease() {
		return release;
	}

	public void setRelease(Integer release) {
		this.release = release;
	}

}
