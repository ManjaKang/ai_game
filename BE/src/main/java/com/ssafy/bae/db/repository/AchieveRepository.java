package com.ssafy.bae.db.repository;

import com.ssafy.bae.db.entity.Achieve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchieveRepository extends JpaRepository<Achieve, Integer> {

    public Achieve findByName(String name);
}
