package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserReqDto {

    String userId;
    int point;

    public UserReqDto(User user){
        userId = user.getUserId();
    }

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .build();
    }
}
