package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.api.dto.UserItemDto;
import com.ssafy.bae.api.service.UserItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserItemController {

    @Autowired
    UserItemService service;

    @Operation(summary = "유저 아이템 조회", description = "유저가 보유한 모든 아이템들을 조회한다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/users/items/{userId}")
    public ResponseEntity<List<UserItemDto>> findAllByUserId(@PathVariable String userId){
        List<UserItemDto> result = new ArrayList<>();
        try {
            result = service.findAllByUserId(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "유저 아이템 획득", description = "유저가 획득한 아이템을 insert 한다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @PostMapping("/users/items")
    public ResponseEntity<UserItemDto> insert(@RequestBody UserItemDto userItemDto){
        UserItemDto result = new UserItemDto();
        try {
            result = service.insert(userItemDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
