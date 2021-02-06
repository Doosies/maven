package com.study.back;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.servlet.function.EntityResponse;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {


    // @RequestMapping(value = "/")
    // public String index(){
    //     return "index.html";
    // }

    @RequestMapping(value = "/api/time", method = RequestMethod.GET)
    public ResponseEntity<String>time(){
        String pattern = "yyyy년 MM월 dd일 HH:mm:ss";
        SimpleDateFormat format = new SimpleDateFormat(pattern);

        String date = format.format(new Date());
        
        return ResponseEntity.ok(date);
    }
}
