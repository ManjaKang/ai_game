package com.ssafy.bae.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class User extends BaseEntity{

    @Column(name = "user_id", columnDefinition = "varchar(30) NOTNULL")
    String userId;
    @Column(name = "token_id", columnDefinition = "varchar(200) NOTNULL")
    String tokenId;
    @Column(name = "service", columnDefinition = "varchar(10) NOTNULL")
    String service;
    @Column(name = "point", columnDefinition = "int default(0) ")
    int point;
    @Column(name = "episode", columnDefinition = "int default(1)")
    int episode;
    @Column(name = "chapter", columnDefinition = "int default(1)")
    int chapter;
    @Column(name = "refresh_id", columnDefinition = "varchar(200) NOTNULL")
    String refreshId;
}
