package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class LoginDto {

    String userId;
    String password;

    public LoginDto(User user){
        userId = user.getUserId();
        password = user.getPassword();
    }

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .password(password)
                .episode(1)
                .chapter(1)
                .build();
    }
}
