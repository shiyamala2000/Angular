package com.kgisl.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;

//import springfox.documentation.swagger2.annotations.EnableSwagger2;
//@EnableWebMvc
//@EnableSwagger2

@SpringBootApplication
@OpenAPIDefinition
public class CrudApplication{

	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}

}
