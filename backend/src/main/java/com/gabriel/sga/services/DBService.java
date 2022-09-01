package com.gabriel.sga.services;

import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabriel.sga.entities.Coleta;
import com.gabriel.sga.repositories.ColetaRepository;

@Service
public class DBService {
	
	@Autowired 
	private ColetaRepository coletaRepository;
	
	public void instanciaBaseDeDados() {
		
		Coleta c1 = new Coleta(null, "98776432", "GO", "Goiatuba", "Flor de sal", "limeira", "Qd 99 Lt 10", 20, new Date());
		
		this.coletaRepository.saveAll(Arrays.asList(c1));
		
	}
}
