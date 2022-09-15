package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserItemDto;

import java.util.List;

public interface UserItemService {

    public List<UserItemDto> findAllByUserId(String userId);

    public UserItemDto insert(UserItemDto userItemDto);
}
