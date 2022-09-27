package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.UserItem;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserItemDto {

    long idx;
    String name;
    String userId;
    String description;
    long index;

    public UserItemDto(UserItem userItem){
        name = userItem.getName();
        userId = userItem.getUserId();
        description = userItem.getDescription();
        index = userItem.getIndex();
    }

    public UserItem toEntity(){
        return UserItem.builder()
                .name(name)
                .userId(userId)
                .description(description)
                .index(index)
                .build();
    }
}
