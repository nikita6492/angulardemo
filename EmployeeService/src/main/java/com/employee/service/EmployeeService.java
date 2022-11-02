package com.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repo.EmployeeRepository;



@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	
	 
	public List<Employee> getEmployee() {
		// TODO Auto-generated method stub
		return employeeRepo.findAll();
	}

	 
	public Employee addEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepo.save(employee);
	}

	 
	public Employee updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepo.save(employee);
	}

	 
	public void deleteEmployee(Long id) {
		Optional<Employee> entity = employeeRepo.findById(id);
		employeeRepo.delete(entity.get());
		
	}

	 
	public Employee fetchEmployee(Long id) {
		Optional<Employee> employee=  employeeRepo.findById(id);
		return employee.get();
	}
}
