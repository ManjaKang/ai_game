package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.AchieveDto;
import com.ssafy.bae.api.dto.ItemDto;
import com.ssafy.bae.api.service.ItemService;
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

@RestController
@CrossOrigin(origins = "*")
public class ItemController {

    @Autowired
    ItemService service;

    @Operation(summary = "아이템 상세 조회", description = "아이템 이름으로 설명 상세 조회")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "OK !!"),
            @ApiResponse(responseCode = "400", description = "BAD REQUEST !!"),
            @ApiResponse(responseCode = "404", description = "NOT FOUND !!"),
            @ApiResponse(responseCode = "500", description = "INTERNAL SERVER ERROR !!")
    })
    @GetMapping("/items/{name}")
    public ResponseEntity<ItemDto> findByName(@PathVariable String name){
        ItemDto result = new ItemDto();
        try {
            result = service.findByName(name);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
