package com.study.back;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.study.back.User.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.servlet.function.EntityResponse;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
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

    @RequestMapping(value = "/api/users", method = RequestMethod.GET)
    public ResponseEntity<ArrayList> users(){
        User user = new User();
        user.setEmail("email");
        user.setId("1");
        user.setName("songMinHyung");
        user.setPhone("01029341056");
        Map<String,String>address = new HashMap<String,String>();
        address.put("first","first");
        user.setAddress(address);


        User user2 = new User();
        user2.setEmail("email");
        user2.setId("2");
        user2.setName("songMinHyung");
        user2.setPhone("01029341056");
        Map<String,String>address2 = new HashMap<String,String>();
        address2.put("first","first");
        user2.setAddress(address2);

        ArrayList<User> users = new ArrayList<User>();
        users.add(user);
        users.add(user2);

        return ResponseEntity.ok(users);
    }
}
