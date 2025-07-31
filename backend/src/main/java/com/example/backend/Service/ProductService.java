package com.example.backend.Service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.backend.Model.Product;
import com.example.backend.Repositry.ProductRepository;

@Component
public class ProductService {
	 private final ProductRepository repository;

	    public ProductService(ProductRepository repository) {
	        this.repository = repository;
	    }

	    public List<Product> getAll() {
	        return repository.findAll();
	    }

	    public Product add(Product product) {
	        return repository.save(product);
	    }

	    public Product update(Long id, Product product) {
	        Product existing = repository.findById(id).orElseThrow();
	        existing.setProductName(product.getProductName());
	        existing.setPrice(product.getPrice());
	        existing.setQuantity(product.getQuantity());
	        return repository.save(existing);
	    }

	    public void delete(Long id) {
	        repository.deleteById(id);
	    }
}
