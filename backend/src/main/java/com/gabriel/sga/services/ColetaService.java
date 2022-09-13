package com.gabriel.sga.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.gabriel.sga.entities.Coleta;
import com.gabriel.sga.repositories.ColetaRepository;

@Service
public class ColetaService {
	
	@Autowired
	private ColetaRepository repository;
	
	public List<Coleta> findAll() {
		return repository.findAll();
	}
	
	public Coleta create(Coleta obj) {
		obj.setId(null);
		try {
			return repository.save(obj);
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			throw new DataIntegrityViolationException("Não foi possível registrar a coleta.");
		}
	}
	
}
