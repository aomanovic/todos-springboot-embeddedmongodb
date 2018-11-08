package com.example.todosembeddedmongodb.repositories;

import com.example.todosembeddedmongodb.models.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {

}