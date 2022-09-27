package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.LoginDto;
import com.ssafy.bae.api.dto.UserDto;

public interface UserService {

    public UserDto findByUserId(String userId);

    public boolean existByUserId(String userId);

    public UserDto signup(LoginDto loginDto);

    public UserDto login(LoginDto loginDto);

    public int updateProgress(UserDto userDto);
}
