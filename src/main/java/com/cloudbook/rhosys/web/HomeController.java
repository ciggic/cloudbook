package com.cloudbook.rhosys.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	String ledONURL = "http://10.10.1.11:9999/led/on";
	String ledOFFURL = "http://10.10.1.11:9999/led/off";
	
	@RequestMapping("/")
	public String home() {		
		return "/home";
	}
	
	
	@RequestMapping("/led/on")
	@ResponseBody
	public String ledOn () throws IOException {
		URL obj = new URL(ledONURL);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		
		int responseCode = con.getResponseCode();
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();
		//print result
		return response.toString();
		
	}
	
	@RequestMapping("/led/off")
	@ResponseBody
	public String ledOff() throws IOException {
		URL obj = new URL(ledOFFURL);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("GET");
		
		int responseCode = con.getResponseCode();
		System.out.println("Response Code : " + responseCode);

		BufferedReader in = new BufferedReader(
		        new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer response = new StringBuffer();

		while ((inputLine = in.readLine()) != null) {
			response.append(inputLine);
		}
		in.close();
		//print result
		return response.toString();
		
	}
}
