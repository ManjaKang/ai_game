package com.ssafy.bae.db.entity;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "items")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Item extends BaseEntity{

    @Column(name = "name", columnDefinition = "varchar(20) NOTNULL UNIQUE")
    String name;
    @Column(name = "description", columnDefinition = "varchar(100) NOTNULL")
    String description;
    @Column(name = "eng_name", columnDefinition = "varchar(45) NOTNULL")
    String engName;
    @Column(name = "episode", columnDefinition = "int")
    int episode;
    @Column(name = "chapter", columnDefinition = "int")
    int chapter;
}
