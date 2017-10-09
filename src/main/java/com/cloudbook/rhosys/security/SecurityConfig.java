package com.cloudbook.rhosys.security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	protected void configure(HttpSecurity security) throws Exception {
		security.authorizeRequests()
			.anyRequest().authenticated()
			.and()
			.formLogin().loginPage("/login");
	}
}
