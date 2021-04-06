package com.sth876.zensar.repository;

import com.sth876.zensar.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, Integer> {

    List<User> findByIdContaining(int id);

    List<User> findByNameContaining(String name);
}
