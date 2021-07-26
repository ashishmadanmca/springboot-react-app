package com.springboot.fullstackapp.service;

import java.util.ArrayList;
import java.util.List;

import com.springboot.fullstackapp.model.Student;
import org.springframework.stereotype.Service;

/**
 * StudentService Class: Service for Student class
 * Date Create: 23/07/2021
 * Created By : Ashish Madan
 */

@Service
public class StudentService {

	private static List<Student> students = new ArrayList<>();
	private static int idCounter = 0;

	static {
		for (int i = 1; i <= 50; i++) {
			students.add(new Student(++idCounter,
					"Student".concat(String.valueOf(i)),
					"City".concat(String.valueOf(i)),
					"440008"));
		}

		//students.add(new Student(++idCounter, "Ashish Madan", "Pune", "411057"));
		//students.add(new Student(++idCounter, "Rahul Saini", "Nagur","411027"));
		//students.add(new Student(++idCounter, "Mohit Agrawal", "Nashik", "440065"));
		//students.add(new Student(++idCounter, "Utsav Acharya", "Mumbai", "3100987"));
	}

	//findAll method to return all the students
	public List<Student> findAll() {
		return students;
	}

	//Save method to add a new student
	public Student save(Student student) {
		student.setId(++idCounter);
		students.add(student);
		return student;
	}
}