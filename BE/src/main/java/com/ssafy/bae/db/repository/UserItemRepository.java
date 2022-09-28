package com.ssafy.bae.db.repository;

import com.ssafy.bae.db.entity.UserItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserItemRepository extends JpaRepository<UserItem, Integer> {

    public List<UserItem> findAllByUserId(String userId);  // 보유 아이템 전체 조회

    public boolean existsByUserIdAndName(String userId, String name); // 아이템을 보유 중인지 확인

}
