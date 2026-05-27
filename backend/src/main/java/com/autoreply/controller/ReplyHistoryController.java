package com.autoreply.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.autoreply.entity.ReplyHistory;
import com.autoreply.repository.ReplyHistoryRepository;

@RestController
@RequestMapping("/api/history")
@CrossOrigin(origins = "*")
public class ReplyHistoryController {

    @Autowired
    private ReplyHistoryRepository repository;

    // Save Reply
    @PostMapping
    public ReplyHistory saveReply(
            @RequestBody ReplyHistory history) {

        return repository.save(history);
    }

    // Get All Replies
    @GetMapping
    public java.util.List<ReplyHistory> getAllReplies() {

        return repository.findAll();
    }

    // Delete Reply
    @DeleteMapping("/{id}")
    public String deleteReply(@PathVariable Long id) {

        repository.deleteById(id);

        return "Reply Deleted Successfully";
    }
}