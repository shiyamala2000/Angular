package com.kgisl.crud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kgisl.crud.model.Employee;
import com.kgisl.crud.service.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin("http://localhost:4200/*")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	
	@GetMapping("/")
	public  ResponseEntity<List<Employee>> getAllEmployee(){
		 List<Employee> l = employeeService.getAll();
		 return new ResponseEntity<>(l, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable Integer id) {
	     Optional<Employee> l = employeeService.getById(id);
	    System.out.println("Get employee "+l);
		return l;
	}

	@PostMapping("/")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee e) {
		Employee l = employeeService.insert(e);
		 return new ResponseEntity<>(l, HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public Employee updateEmployee(@RequestBody Employee e,@PathVariable int id) {
        Employee l = employeeService.update(e, id);  
        System.out.println("update id "+l.getId()+"update name "+l.getName());
        return l;
	}
	
//	@PatchMapping("/{id}")
//	private Employee updateEmployeeByPatch(@RequestBody Employee e,@PathVariable int id) {
//		e.setId(id);
//		return employeeService.partialUpdatePatch(e);
////         Employee l = employeeService.partialUpdatePatch(e);
////         return new ResponseEntity<>(l, HttpStatus.ACCEPTED);
//	}
	
		@DeleteMapping("/{id}")
	    public void deleteEmployee(@PathVariable Integer id) {
	       employeeService.delete(id);
	       
	}
}
