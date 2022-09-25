package com.ssafy.bae.api.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ImageDto {
    String base64;
    String fileName;
    String Name;
}
