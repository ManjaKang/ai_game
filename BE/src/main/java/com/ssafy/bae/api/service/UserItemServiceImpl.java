package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.api.dto.UserItemDto;
import com.ssafy.bae.db.entity.UserAch;
import com.ssafy.bae.db.entity.UserItem;
import com.ssafy.bae.db.repository.UserItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserItemServiceImpl implements UserItemService {

    @Autowired
    UserItemRepository dao;

    @Override
    public List<UserItemDto> findAllByUserId(String userId) {

        List<UserItemDto> dtoList = new ArrayList<>();

        List<UserItem> entityList = dao.findAllByUserId(userId);
        for(UserItem userItem : entityList){
            dtoList.add(new UserItemDto(userItem));
        }

        return dtoList;
    }

    @Override
    public UserItemDto insert(UserItemDto userItemDto) {

        boolean isExist = dao.existsByUserIdAndName(userItemDto.getUserId(), userItemDto.getName());
        if(!isExist){
            UserItem userItem = userItemDto.toEntity();
            UserItem result = dao.save(userItem);
            return new UserItemDto(result);
        } else {
            return userItemDto;
        }
    }
}
