package com.sth876.zensar.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;

@JsonNaming(PropertyNamingStrategy.UpperCamelCaseStrategy.class)

@Document(collection = "User")
public class User {

        @Id
        @JsonProperty(value = "id")
        private int id;
        @JsonProperty(value = "name")
        private String name;
        @JsonProperty(value = "Image")
        private String Image;

    public User() {
    }

    public User(int id, String name, String Image) {
        this.id = id;
        this.name = name;
        this.Image = Image;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return Image;
    }

    public void setImage(String Image) {
        this.Image = Image;
    }
}
