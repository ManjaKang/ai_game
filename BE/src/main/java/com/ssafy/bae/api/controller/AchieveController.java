package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.AchieveDto;
import com.ssafy.bae.api.dto.UserAchDto;
import com.ssafy.bae.api.service.AchieveService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AchieveController {

    @Autowired
    AchieveService service;

    @Operation(summary = "업적 상세 조회", description = "업적 이름으로 설명, 조건 조회")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/achievements/{name}")
    public ResponseEntity<AchieveDto> findByName(@PathVariable String name){
        AchieveDto result = new AchieveDto();
        try {
            result = service.findByName(name);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
