package com.ssafy.bae.api.service;

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
    public int updatePoint(int point, String userId) {
        return dao.updatePoint(point, userId);
    }
}
