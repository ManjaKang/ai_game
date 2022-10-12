package com.ssafy.bae.api.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ImageReqDto {
    String base64;
    String fileName;
    int episode;
    int chapter;
}
