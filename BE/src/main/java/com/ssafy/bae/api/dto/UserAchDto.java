package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.UserAch;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserAchDto {

    long idx;
    String userId;  // 유저 아이디
    String name;  // 업적 이름

    public UserAchDto(UserAch userAch){
        userId = userAch.getUserId();
        name = userAch.getName();
    }

    public UserAch toEntity(){
        return UserAch.builder()
                .userId(userId)
                .name(name)
                .build();
    }
}
