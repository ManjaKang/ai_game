package com.ssafy.bae.api.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserItemReqDto {

    String userId;
    int episode;
    int chapter;
    List<UserItemDto> items;

}
