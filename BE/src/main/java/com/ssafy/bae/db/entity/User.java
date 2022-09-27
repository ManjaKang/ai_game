package com.ssafy.bae.db.entity;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;

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
    @Column(name = "password", columnDefinition = "varchar(30) NOTNULL")
    String password;
    @Column(name = "episode", columnDefinition = "int default(1)")
    @ColumnDefault("1")
    int episode;
    @ColumnDefault("1")
    @Column(name = "chapter", columnDefinition = "int default(1)")
    int chapter;
}
