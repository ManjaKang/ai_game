package com.ssafy.bae.db.repository;

import com.ssafy.bae.db.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

    public Item findByName(String name); // 아이템 상세 조회
}
