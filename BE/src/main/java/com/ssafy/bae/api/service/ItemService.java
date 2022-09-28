package com.ssafy.bae.api.service;

import com.ssafy.bae.api.dto.ItemDto;

public interface ItemService {

    public ItemDto findByName(String name);
}
