package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.ImageReqDto;
import com.ssafy.bae.api.dto.ImageResDto;
import com.ssafy.bae.api.dto.ItemDto;
import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.PumpStreamHandler;
import org.apache.tomcat.util.codec.binary.Base64;
import org.python.util.PythonInterpreter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

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
            String directoryName = "/home/ubuntu/be";

            if(file!=""){
                UUID uuid=UUID.randomUUID();
                filePath = directoryName+File.separator+"img"+File.separator+uuid+"_"+filename;
                makeFileWithString(file,filename,uuid);
//                String result = pythonProcessbuilder(filePath);
                String result = execPython(filePath, filename);

                File finishedFile = new File(filePath);
                if (finishedFile.exists()) {
                    finishedFile.delete(); // removing finished file
                }

                // ex) camera,0.7951256/pen,0.157654/table,0.985215
                String[] items = result.split("/");
                for(String item : items){
                    String[] tmp = item.split(",");
                    list.add(new ImageResDto(tmp[0], Float.parseFloat(tmp[1])));
                }

                Collections.sort(list, (e1, e2) -> e1.getPercent()-e2.getPercent()>0 ? -1 : 1);
                if(list.size()>5) list = list.subList(0, 5);
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

            File target = new File("/home/ubuntu/be/img/"+uuid+"_"+filename);
            target.createNewFile();
            fos = new FileOutputStream(target);
            fos.write(decode);
            fos.close();
        } catch (Exception e){
            e.printStackTrace();
        }
    }
    public String pythonProcessbuilder(String filePath) throws IOException, InterruptedException {
        System.out.println("filePath" + filePath);
        interpreter = new PythonInterpreter();
        StringWriter out = new StringWriter();
        interpreter.execfile("/home/ubuntu/ai/yolov5/aiDetect.py");
        interpreter.setOut(out);
        interpreter.exec("yolo_v5('"+filePath+"')");
        String result = out.toString();
        System.out.println("result : " +result);


        return result;
    }
    public static String execPython(String filePath, String filename) throws IOException, InterruptedException {
        String[] command = new String[4];
        command[0] = "python3";
        command[1] = "/home/ubuntu/ai/yolov5/aiDetect.py";
        command[2] = filePath;
        command[3] = filename;
        CommandLine commandLine = CommandLine.parse(command[0]);
        for (int i = 1, n = command.length; i < n; i++) {
            commandLine.addArgument(command[i]);
        }

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PumpStreamHandler pumpStreamHandler = new PumpStreamHandler(outputStream);
        DefaultExecutor executor = new DefaultExecutor();
        executor.setStreamHandler(pumpStreamHandler);
        int result = executor.execute(commandLine);
        System.out.println("result: " + result);
        System.out.println("output: " + outputStream.toString());
        String[] strings = outputStream.toString().split("\n");
        System.out.println("strings : " + strings[strings.length-3]);
        return strings[strings.length-3].split(" : ")[1];
    }
}
