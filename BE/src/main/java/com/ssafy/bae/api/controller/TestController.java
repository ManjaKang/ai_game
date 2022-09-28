package com.ssafy.bae.api.controller;

import com.ssafy.bae.api.dto.ImageResDto;
import com.ssafy.bae.api.dto.ItemDto;
import com.ssafy.bae.api.dto.TestDto;
import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.PumpStreamHandler;

import java.io.*;

import org.python.core.PyFunction;
import org.python.core.PyObject;
import org.python.util.PythonInterpreter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    private static PythonInterpreter interpreter;

    @GetMapping("/test/image")
    public void getImageResult(@RequestBody TestDto test){
        System.out.println("puthon 호출");
        String[] command = new String[4];
        command[0] = "python";
        command[1] = "C:\\Users\\SSAFY\\Documents\\Common\\S07P22E102-front\\AI\\sum.py";
        command[2] = String.valueOf(test.getA());
        command[3] = String.valueOf(test.getB());;

        try {
            pythonProcessbuilder(test.getA(), test.getB());
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    public String pythonProcessbuilder(int a, int b) throws IOException, InterruptedException {

        String str = "sum(" + a + "," + b + ")";

        interpreter = new PythonInterpreter();
        StringWriter out = new StringWriter();
        interpreter.execfile("/Users/baechanbi/Documents/Common/FE/sum.py");
        interpreter.setOut(out);
        interpreter.exec(str);
        String result = out.toString();
        System.out.println("result : " +result);
        

        return "pythonconnet";
    }
}
