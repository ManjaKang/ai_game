package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.api.dto.UserItemDto;
import com.ssafy.bae.api.dto.UserItemReqDto;
import com.ssafy.bae.db.entity.Item;
import com.ssafy.bae.db.entity.UserAch;
import com.ssafy.bae.db.entity.UserItem;
import com.ssafy.bae.db.repository.ItemRepository;
import com.ssafy.bae.db.repository.UserItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserItemServiceImpl implements UserItemService {

    @Autowired
    UserItemRepository dao;

    @Autowired
    ItemRepository itemRepository;

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
    public int insert(UserItemReqDto userItemReqDto) {

        int result = 0;

        for(UserItemDto userItemDto : userItemReqDto.getItems()){
            boolean isExist = dao.existsByUserIdAndName(userItemReqDto.getUserId(), userItemDto.getName());
            if(!isExist){
                System.out.println(userItemDto);

                UserItem userItem = new UserItem();
                userItem.setUserId(userItemReqDto.getUserId());
                userItem.setEpisode(userItemReqDto.getEpisode());
                userItem.setChapter(userItemReqDto.getChapter());

                userItem.setName(userItemDto.getName());
                userItem.setDescription(userItemDto.getDescription());
                userItem.setIndex(userItemDto.getIndex());

                dao.save(userItem);

                result++;
            }
        }
        return result;
    }
}
