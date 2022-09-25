package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.ImageDto;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileOutputStream;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class ImageController {

    @PostMapping("/image")
    public void getImage(@RequestBody ImageDto imageDto){
        try{
            String filePath =null;
            String file = imageDto.getBase64();
            String filename = imageDto.getFileName();

            if(file!=""){
                UUID uuid=UUID.randomUUID();
                filePath = "/Users/baechanbi/Documents/Common/"+""+uuid+"_"+filename;
                makeFileWithString(file,filename,uuid);
            } // filePath <- 변수를 DB에 저장 (이미지 업로드 경로)
        }catch(Exception e){
            e.printStackTrace();
        }

    }

    private static void makeFileWithString(String base64, String filename, UUID uuid){
        byte decode[] = Base64.decodeBase64(base64);
        FileOutputStream fos;
        try{
            File target = new File("/Users/baechanbi/Documents/Common/"+""+uuid+"_"+filename);
            target.createNewFile();
            fos = new FileOutputStream(target);
            fos.write(decode);
            fos.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
