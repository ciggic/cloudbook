package com.cloudbook.rhosys.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudbook.rhosys.domain.User;
import com.cloudbook.rhosys.domain.repositories.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping("/users")
	public List<User> listUsers() {
		System.out.println(userRepository.findAll());
		return null;
		
	}
}
