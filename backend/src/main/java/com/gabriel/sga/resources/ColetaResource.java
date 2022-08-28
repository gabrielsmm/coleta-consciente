package com.gabriel.sga.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gabriel.sga.entities.Coleta;
import com.gabriel.sga.services.ColetaService;

@RestController
@RequestMapping(value = "/coletas")
public class ColetaResource {
	
	@Autowired
	private ColetaService service;
	
	@PostMapping
	public ResponseEntity<Coleta> create(@RequestBody Coleta obj) {
		obj = service.create(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).body(obj);
	}
	
	@GetMapping
	public ResponseEntity<List<Coleta>> findAll() {
		List<Coleta> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
}
