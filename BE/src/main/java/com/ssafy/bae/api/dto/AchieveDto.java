package com.ssafy.bae.api.dto;

import com.ssafy.bae.db.entity.Achieve;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AchieveDto {

    long idx;
    String name;  // 업적명
    String description;  // 업적 설명
    String condition;  // 업적 달성 조건

    public AchieveDto(Achieve achieve){
        name = achieve.getName();
        description = achieve.getDescription();
        condition = achieve.getCondition();
    }

    public Achieve toEntity(){
        return Achieve.builder()
                .name(name)
                .description(description)
                .condition(condition)
                .build();
    }
}
