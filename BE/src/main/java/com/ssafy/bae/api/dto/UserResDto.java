package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResDto {

    long idx;
    String userId;
    String password;
    int episode;
    int chapter;

    public UserResDto(String userId, String password){
        this.userId = userId;
        this.password = password;
    }

    public UserResDto(User user){
        userId = user.getUserId();
        password = user.getPassword();
        episode = user.getEpisode();
        chapter = user.getChapter();
    }

    public User toEntity(){
        return User.builder()
                .userId(userId)
                .password(password)
                .episode(episode)
                .chapter(chapter)
                .build();
    }
}
