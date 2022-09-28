package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.ImageReqDto;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class ImageController {

    @PostMapping("/image")
    public void getImage(@RequestBody ImageReqDto imageDto){
        try{
            String filePath =null;
            String file = imageDto.getBase64();
            String filename = imageDto.getFileName();
            System.out.println(filename);
            System.out.println(file);

            if(file!=""){
                UUID uuid=UUID.randomUUID();
                makeFileWithString(file,filename,uuid);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

    }

    private static void makeFileWithString(String base64, String filename, UUID uuid){
        byte decode[] = Base64.decodeBase64(base64);
        FileOutputStream fos;
        try{
            Path path = Paths.get("");
            String directoryName = path.toAbsolutePath().toString();
            System.out.println("Current Working Directory is = " +directoryName);

            File target = new File(directoryName+File.separator+"img"+File.separator+uuid+"_"+filename);
            target.createNewFile();
            fos = new FileOutputStream(target);
            fos.write(decode);
            fos.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
