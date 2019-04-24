package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

@RestController
public class FileController {


    @CrossOrigin
    @GetMapping("/file")
    public void fileDownload(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        File file = new File("d:/开题答辩.pptx");
        FileInputStream fis  = new FileInputStream(file);
        String fileName = file.getName();
        OutputStream fos = response.getOutputStream();
        response.reset();
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/octet-stream");
        //3.设置content-disposition响应头控制浏览器以下载的形式打开文件
        response.addHeader("Content-Disposition","attachment;filename=" + new String(fileName.getBytes(),"utf-8"));

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET");
        response.setHeader("Access-Control-Allow-Headers", "*");
        response.addHeader("Access-Control-Allow-Credentials", "true");

        byte[] buffer = new byte[1024];
        int len = 0;
        while((len = fis.read(buffer))>0){
            fos.write(buffer,0,len);
        }
    }

    @RequestMapping("/hello")
    public String index() {
        return "Hello World";
    }
}
