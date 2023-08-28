package com.kgisl.crud.service;

import java.util.List;
//import java.util.Optional;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.kgisl.crud.model.Employee;
import com.kgisl.crud.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
		
	public List<Employee> getAll() {
		return employeeRepository.findAll();
	}
	
	public Optional<Employee> getById(Integer id) {
		return employeeRepository.findById(id);
//				orElseThrow(()->new NotFoundException("Employee not found"));
	}
	
	public Employee insert(Employee e) {
		return employeeRepository.save(e);
	}

	public Employee update(Employee e,Integer id) {
		return employeeRepository.save(e);
	}
//	
//	public Employee partialUpdatePatch(Employee e) {
//		Employee existingEmp=getById(e.getId());
//		existingEmp.setName(e.getName());
//		existingEmp.setDesignation(e.getDesignation());
//		existingEmp.setPhoneNo(e.getPhoneNo());
//		return employeeRepository.save(existingEmp);
//	}
	
	public void delete(Integer id) {
		employeeRepository.deleteById(id);
	}
}
