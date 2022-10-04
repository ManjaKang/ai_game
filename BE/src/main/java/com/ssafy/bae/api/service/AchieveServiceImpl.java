package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.AchieveDto;
import com.ssafy.bae.db.entity.Achieve;
import com.ssafy.bae.db.repository.AchieveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AchieveServiceImpl implements AchieveService {

    @Autowired
    AchieveRepository dao;

    @Override
    public AchieveDto findByName(String name) {
        Achieve result = dao.findByName(name);
        return new AchieveDto(result);
    }
}
