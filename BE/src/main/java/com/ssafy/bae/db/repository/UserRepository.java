package com.ssafy.bae.db.repository;

import com.ssafy.bae.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    public User findByUserId(String userId);

    public boolean existsByUserId(String userId);

    @Modifying
    @Transactional
    @Query(value = "UPDATE users SET episode = ? , chapter = ? WHERE user_id = ?", nativeQuery = true)
    public int updateProgress(int episode, int chapter, String userId);
}
