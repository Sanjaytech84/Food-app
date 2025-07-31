package com.example.backend.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
		
	}

