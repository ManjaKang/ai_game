package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.UserAch;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserAchDto {

    int idx;
    String userID;  // 유저 아이디
    String name;  // 업적 이름

    public UserAchDto(UserAch userAch){
        userID = userAch.getUserId();
        name = userAch.getName();
    }

    public UserAch toEntity(){
        return UserAch.builder()
                .userId(userID)
                .name(name)
                .build();
    }
}
