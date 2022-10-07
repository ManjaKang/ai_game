package com.ssafy.bae.db.repository;

import com.ssafy.bae.db.entity.UserAch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAchRepository extends JpaRepository<UserAch,Integer> {

    public List<UserAch> findAllByUserId(String userId);  // 유저 업적 전체 조회

}
