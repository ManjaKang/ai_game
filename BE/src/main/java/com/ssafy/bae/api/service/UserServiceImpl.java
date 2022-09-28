package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.LoginDto;
import com.ssafy.bae.api.dto.UserDto;
import com.ssafy.bae.db.entity.User;
import com.ssafy.bae.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository dao;

    @Override
    public UserDto findByUserId(String userId) {
        User user = dao.findByUserId(userId);
        return new UserDto(user);
    }

    @Override
    public boolean existByUserId(String userId) {
        return dao.existsByUserId(userId);
    }

    @Override
    public UserDto signup(LoginDto loginDto) {
        User user = new User();
        if(existByUserId(loginDto.getUserId())){
            user.setUserId("중복");
        }
        else{
            user = dao.save(loginDto.toEntity());
        }
        return new UserDto(user);
    }

    @Override
    public UserDto login(LoginDto loginDto) {
        UserDto result = new UserDto();
        if(existByUserId(loginDto.getUserId())){
            User user = dao.findByUserId(loginDto.getUserId());
            if(user.getPassword().equals(loginDto.getPassword())){
                result = new UserDto(user);
            } else {
                result.setUserId("wrong password");
            }
        } else {
            result.setUserId("wrong userId");
        }
        return result;
    }

    @Override
    public int updateProgress(UserDto userDto) {
        return dao.updateProgress(userDto.getEpisode(), userDto.getChapter(), userDto.getUserId());
    }

}
