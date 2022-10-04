package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.db.entity.UserAch;
import com.ssafy.bae.db.repository.UserAchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserAchServiceImpl implements UserAchService{

    @Autowired
    UserAchRepository dao;

    @Override
    public List<UserAchDto> findAllByUserId(String userId) {
        List<UserAchDto> dtoList = new ArrayList<>();

        List<UserAch> entityList = dao.findAllByUserId(userId);
        for(UserAch userAch : entityList){
            dtoList.add(new UserAchDto(userAch));
        }

        return dtoList;
    }

    @Override
    public UserAchDto insert(UserAchDto userAchDto) {
        UserAch entity = userAchDto.toEntity();
        UserAch result = dao.save(entity);
        return new UserAchDto(result);
    }
}
