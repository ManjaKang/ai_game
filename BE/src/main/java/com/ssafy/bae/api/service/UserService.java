package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserReqDto;
import com.ssafy.bae.api.dto.UserResDto;

public interface UserService {

    public UserResDto findByUserId(String userId);

    public boolean existByUserId(String userId);

    public UserResDto signup(UserReqDto userReqDto);

    public UserResDto login(UserReqDto userReqDto);
}
