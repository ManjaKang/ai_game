package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.api.service.UserAchService;
import com.ssafy.bae.db.entity.UserAch;
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
public class UserAchController {

    @Autowired
    UserAchService service;

    @Operation(summary = "유저 업적 조회", description = "유저가 달성한 모든 업적들을 조회한다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/users/achievements/{userId}")
    public ResponseEntity<List<UserAchDto>> findAllByUserId(@PathVariable String userId){
        List<UserAchDto> result = new ArrayList<>();
        try {
            result = service.findAllByUserId(userId);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Operation(summary = "유저 업적 달성", description = "유저가 달성한 업적을 insert 한다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @PostMapping("/users/achievements")
    public ResponseEntity<UserAchDto> insert(@RequestBody UserAchDto userAchDto){
        UserAchDto result = new UserAchDto();
        try {
            result = service.insert(userAchDto);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
