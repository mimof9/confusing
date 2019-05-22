package com.demo.springbootback.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @RequestMapping("")
    public String index() {
        System.out.println('/');
        return "springboot服务器请求根地址";
    }

    @RequestMapping("/hello")
    public String hello() {
        System.out.println("hello");
        return "hello webpack";
    }
}
