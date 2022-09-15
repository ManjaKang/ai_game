package com.ssafy.bae.db.entity;

import lombok.*;

import javax.persistence.Column;
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

    @Column(name = "name", columnDefinition = "varchar(30) NOTNULL UNIQUE")
    String name;
    @Column(name = "description", columnDefinition = "varchar(100) NOTNULL")
    String description;
    @Column(name = "condition", columnDefinition = "varchar(100) NOTNULL")
    String condition;

}
