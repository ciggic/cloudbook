package com.cloudbook.rhosys.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Entity
public class User implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Getter @Setter
	@Column(unique = true)
	@Size(max = 64)
	private String username;

	@Getter @Setter
	@Size(max = 256)
	@Column(nullable = false)
	private String password;

	
}
