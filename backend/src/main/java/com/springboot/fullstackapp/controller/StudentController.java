package com.springboot.fullstackapp.controller;

import com.springboot.fullstackapp.model.Student;
import com.springboot.fullstackapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

/**
 * StudentResource Class: Controller for Student class
 * Date Create: 23/07/2021
 * Created By : Ashish Madan
 */

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;

	@Autowired
	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@GetMapping("/api/students")
	public List<Student> getAllStudents() {
		return studentService.findAll();
	}

	@PostMapping("/api/students")
	public ResponseEntity<Void> createStudent(@RequestBody Student student) {
		Student createdStudent = studentService.save(student);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdStudent.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}
}