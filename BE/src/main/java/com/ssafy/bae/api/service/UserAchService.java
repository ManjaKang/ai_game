package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.db.entity.UserAch;

import java.util.List;

public interface UserAchService {

    public List<UserAchDto> findAllByUserId(String userId);

    public UserAchDto insert(UserAchDto userAchDto);
}
