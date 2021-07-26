package com.springboot.fullstackapp.controller;

import com.springboot.fullstackapp.model.Student;
import com.springboot.fullstackapp.controller.StudentController;
import com.springboot.fullstackapp.service.StudentService;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentControllerTests {

	//Mock the service
	@Mock
	StudentService mockService = new StudentService();

	//Mock the controller
	@InjectMocks
	StudentController tt = new StudentController(mockService);

	//Gets all the student records
	@Test @Order(1)
	public void shouldGetAllStudents() throws Exception
	{
		List<Student> datas = new ArrayList<>();
		datas.add(new Student(1, "Ashish Madan", "Pune", "411057"));
		datas.add(new Student(2, "Rahul Saini", "Nagur","411027"));
		datas.add(new Student(3, "Mohit Agrawal", "Nashik", "440065"));
		datas.add(new Student(4, "Utsav Acharya", "Mumbai", "3100987"));

		given(mockService.findAll()).willReturn(datas);

		List<Student> result = tt.getAllStudents();

		assertEquals(datas,result);
	}

	// Add new student
	@Test @Order(2)
	public void shouldInsertNewStudent() throws Exception
	{
		Student st = new Student(7, "New fake student", "Fake city", "440008");
		given(mockService.save(st)).willReturn(st);

		StudentController tt1 = new StudentController(mockService);
		HttpStatus result = tt1.createStudent(st).getStatusCode();
		assertEquals(HttpStatus.CREATED,result);
	}
}
