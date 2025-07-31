package com.example.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Model.Product;
import com.example.backend.Service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductService service;

	public ProductController(ProductService service) {
		this.service = service;
	}

	@GetMapping("/")
	public List<Product> getAll() {
		return service.getAll();
	}

	@PostMapping("/")
	public Product create(@RequestBody Product product) {
		return service.add(product);
	}

	@PutMapping("/{id}")
	public Product update(@PathVariable Long id, @RequestBody Product product) {
		return service.update(id, product);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
