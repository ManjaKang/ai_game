package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.ImageReqDto;
import com.ssafy.bae.api.dto.ImageResDto;
import com.ssafy.bae.api.dto.ItemDto;
import org.apache.tomcat.util.codec.binary.Base64;
import org.python.util.PythonInterpreter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.StringWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*")
public class ImageController {

    private static PythonInterpreter interpreter;

    @PostMapping("/image")
    public ResponseEntity<List<ImageResDto>> getImage(@RequestBody ImageReqDto imageDto){

        List<ImageResDto> list = new ArrayList<>();

        try{
            String filePath =null;
            String file = imageDto.getBase64();
            String filename = imageDto.getFileName();
            System.out.println(filename);
            //System.out.println(file);

            Path path = Paths.get("");
            String directoryName = path.toAbsolutePath().getParent().toString();

            if(file!=""){
                UUID uuid=UUID.randomUUID();
                filePath = directoryName+File.separator+"img"+File.separator+uuid+"_"+filename;
                makeFileWithString(file,filename,uuid);
                String result = pythonProcessbuilder(filePath);

                // ex) camera,0.7951256/pen,0.157654/table,0.985215
                String[] items = result.split("/");
                for(String item : items){
                    String[] tmp = item.split(",");
                    list.add(new ImageResDto(tmp[0], Float.parseFloat(tmp[1])));
                }
            }
            return new ResponseEntity<>(list, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(list, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    private static void makeFileWithString(String base64, String filename, UUID uuid){
        byte decode[] = Base64.decodeBase64(base64);
        FileOutputStream fos;
        try{
            Path path = Paths.get("");
            String directoryName = path.toAbsolutePath().getParent().toString();
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

    public String pythonProcessbuilder(String filePath) throws IOException, InterruptedException {

        interpreter = new PythonInterpreter();
        StringWriter out = new StringWriter();
        interpreter.execfile("D:\\WorkSpace\\PyCharm\\forStudyAI\\aiDetect.py");
        interpreter.setOut(out);
        interpreter.exec("yolo_v5("+filePath+")");
        String result = out.toString();
        System.out.println("result : " +result);


        return result;
    }
}