package com.cloudbook.rhosys.web;

import java.io.FileNotFoundException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String home() throws FileNotFoundException {		
		
		return "/index";
	}
	
}
