package com.study.back;

import javax.sql.DataSource;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@PropertySource("classpath:/application.properties")
public class Configurations {
    @Bean
    @ConfigurationProperties
    public HikariConfig hikariConfig(){
        return new HikariConfig();
    }

    @Bean
    @ConfigurationProperties
    public DataSource dataSource(){
        DataSource dataSource = new HikariDataSource(hikariConfig());
        log.info("Data Source : {} ", dataSource);
        return dataSource;
    }
    

}
