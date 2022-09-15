package com.ssafy.bae.db.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "users_items")
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserItem extends BaseEntity {

    String name;
    String userId;
    int episode;
    int chapter;

}
