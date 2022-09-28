package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.Item;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ItemDto {

    long idx;
    String name;
    String description;
    String engName;
    int episode;
    int chapter;

    public ItemDto(Item item){
        name = item.getName();
        description = item.getDescription();
    }

    public Item toEntity(){
        return Item.builder()
                .name(name)
                .description(description)
                .build();
    }
}
