package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.LoginDto;
import com.ssafy.bae.api.dto.UserDto;
import com.ssafy.bae.db.entity.User;
import com.ssafy.bae.db.repository.UserRepository;

import java.util.regex.Pattern;

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
        UserDto result = new UserDto();
        String userId = loginDto.getUserId();
        String password = loginDto.getPassword();

        if(existByUserId(userId)){
            result.setUserId("중복");
            return result;
        }
        Pattern pattern = Pattern.compile("^[a-z0-9]{4,20}$"); // 아이디 정규식
        if(userId == null || userId.length() < 4 || userId.length() > 20 || !pattern.matcher(userId).matches()){
            result.setUserId("wrong userId"); // 아이디가 비정상
            return result;
        }
        pattern = Pattern.compile("^[A-Za-z0-9@$!%*#?&]{4,20}$"); // 비밀번호 정규식
        if(password == null || password.length() < 4 || password.length() > 20 || !pattern.matcher(password).matches()){
            result.setUserId("wrong password"); // 비밀번호가 비정상
            return result;
        }
        User user = loginDto.toEntity();
        user = dao.save(user);
        return new UserDto(user);
    }

    @Override
    public UserDto login(LoginDto loginDto) {
        UserDto result = new UserDto();
        String userId = loginDto.getUserId();
        String password = loginDto.getPassword();
        
        Pattern pattern = Pattern.compile("^[a-z0-9]{4,20}$"); // 아이디 정규식
        if(userId == null || userId.length() < 4 || userId.length() > 20 || !pattern.matcher(userId).matches() || !existByUserId(userId)){
            result.setUserId("wrong userId"); // 아이디가 비정상
            return result;
        }
        User user = dao.findByUserId(userId);
        pattern = Pattern.compile("^[A-Za-z0-9@$!%*#?&]{4,20}$"); // 비밀번호 정규식
        if(password == null || password.length() < 4 || password.length() > 20 || !pattern.matcher(password).matches() || !user.getPassword().equals(loginDto.getPassword())){
            result.setUserId("wrong password"); // 비밀번호가 비정상
            return result;
        }
        result = new UserDto(user);
        return result;
    }

    @Override
    public int updateProgress(UserDto userDto) {
        return dao.updateProgress(userDto.getEpisode(), userDto.getChapter(), userDto.getUserId());
    }

}
