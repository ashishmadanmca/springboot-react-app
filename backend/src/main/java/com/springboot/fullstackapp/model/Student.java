package com.springboot.fullstackapp.model;

/**
 * Student Class: Student model
 * Date Create: 23/07/2021
 * Created By : Ashish Madan
 */
public class Student {
	private int id;
	private String name;
	private String city;
	private String pincode;

	public Student() {

	}

	//Constructor
	public Student(int id, String name, String city, String pincode) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.pincode = pincode;
	}

	//Getters and setters
	public int getId() { return id; }

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

}