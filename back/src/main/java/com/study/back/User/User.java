package com.study.back.User;

import java.util.Map;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class User {
    private String id;
    private String name;
    private String email;
    private Map<String, String> address;
    private String phone;
}
