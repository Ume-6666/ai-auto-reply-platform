package com.autoreply.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.autoreply.entity.User;
import com.autoreply.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Register User
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // Login User
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {

        User existingUser = userRepository.findByEmailAndPassword(
                user.getEmail(),
                user.getPassword());

        if (existingUser != null) {
            return "Login Successful";
        }

        return "Invalid Email or Password";
    }

    // Get All Users
    @GetMapping
    public java.util.List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Delete User
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Long id) {

        userRepository.deleteById(id);

        return "User Deleted Successfully";
    }

    // Update User
    

    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
            @RequestBody User updatedUser) {
    
        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));
    
        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
    
        if (updatedUser.getPassword() != null &&
            !updatedUser.getPassword().isEmpty()) {
            user.setPassword(updatedUser.getPassword());
        }
    
        return userRepository.save(user);
    }

    // Get User By ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {

        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User Not Found"));
    }

    // Get Total Users Count
    @GetMapping("/count")
    public Long getUsersCount() {
    
        return userRepository.count();
    }
}