package com.autoreply.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.autoreply.entity.ReplyHistory;

public interface ReplyHistoryRepository
        extends JpaRepository<ReplyHistory, Long> {

}