package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.ItemDto;
import com.ssafy.bae.db.entity.Item;
import com.ssafy.bae.db.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    ItemRepository dao;

    @Override
    public ItemDto findByName(String name) {
        Item result = dao.findByName(name);
        return new ItemDto(result);
    }
}
