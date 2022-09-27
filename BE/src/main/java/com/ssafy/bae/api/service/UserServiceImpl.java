package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserReqDto;
import com.ssafy.bae.api.dto.UserResDto;
import com.ssafy.bae.db.entity.User;
import com.ssafy.bae.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository dao;

    @Override
    public UserResDto findByUserId(String userId) {
        User user = dao.findByUserId(userId);
        return new UserResDto(user);
    }

    @Override
    public boolean existByUserId(String userId) {
        return dao.existsByUserId(userId);
    }

    @Override
    public UserResDto signup(UserReqDto userReqDto) {
        User user = dao.save(userReqDto.toEntity());
        return new UserResDto(user);
    }

    @Override
    public UserResDto login(UserReqDto userReqDto) {
        UserResDto result = new UserResDto();
        if(existByUserId(userReqDto.getUserId())){
            User user = dao.findByUserId(userReqDto.getUserId());
            if(user.getPassword().equals(userReqDto.getPassword())){
                result = new UserResDto(user);
            } else {
                result.setUserId("wrong password");
            }
        } else {
            result.setUserId("wrong userId");
        }
        return result;
    }

}
