package com.email.writer.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/email")
public class EmailGeneratorController {
	
	@Autowired
	private EmailGeneratorService emailGeneratorService;
	
	
	@PostMapping("/generate")
	public ResponseEntity<String>generateEmail(@RequestBody EmailRequest emailRequest)
	{
		String emailResponse=emailGeneratorService.generateReply(emailRequest);
		return ResponseEntity.ok(emailResponse);
	}

}
