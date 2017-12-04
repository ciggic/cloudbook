package com.cloudbook.rhosys.domain.repositories;


import java.util.List;

import org.springframework.data.repository.Repository;

import com.cloudbook.rhosys.domain.User;;

public interface UserRepository extends Repository<User, Long> {
	
	List<User> findAll();
}
