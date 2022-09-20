package com.ssafy.bae.config;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

@Component
public class UserRequestMapper {
    public UserDto toDto(OAuth2User oAuth2User) {
        System.out.println("UserRequestMapper");
        var attributes = oAuth2User.getAttributes();
        return UserDto.builder()
                .email((String)attributes.get("email"))
                .name((String)attributes.get("name"))
                .build();
    }

//    public UserFindRequest toFindDto(UserDto userDto) {
//        return new UserFindRequest(userDto.getEmail());
//    }
}
