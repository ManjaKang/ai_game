package com.ssafy.bae.db.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "achievements")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Achieve extends BaseEntity{

    String name;
    String description;
    String condition;

}
