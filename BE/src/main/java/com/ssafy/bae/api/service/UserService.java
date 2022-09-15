package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserResDto;

public interface UserService {

    public UserResDto findByUserId(String userId);

    public int updatePoint(int point, String userId);
}
