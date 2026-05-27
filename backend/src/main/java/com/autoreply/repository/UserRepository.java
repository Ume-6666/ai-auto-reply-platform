package com.autoreply.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.autoreply.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmailAndPassword(String email, String password);

}