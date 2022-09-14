package com.ssafy.bae.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users_achievements")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserAch extends BaseEntity{

    @Column(name = "user_id", columnDefinition = "varchar(30) NOTNULL UNIQUE")
    String userId;
    @Column(name = "name", columnDefinition = "varchar(30) NOTNULL")
    String name;

}
