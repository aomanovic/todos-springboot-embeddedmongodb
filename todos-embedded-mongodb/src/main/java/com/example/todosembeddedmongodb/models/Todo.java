package com.example.todosembeddedmongodb.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Document(collection="todos")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Todo {
    @Id
    private String id;

    @NotBlank
    @Size(max=100)
    @Indexed(unique=true)
    private String title;

    @NotBlank
    @Size(max=1000)
    private String description;

    private Date eventTime = new Date();

    public Todo() {
        super();
    }

    public Todo(String title, String description, Date eventTime) {
        this.title = title;
        this.description = description;
        this.eventTime = eventTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getEventTime() {
        return eventTime;
    }

    public void setEventTime(Date eventTime) {
        this.eventTime = eventTime;
    }

    @Override
    public String toString() {
        return String.format(
                "Todo[id=%s, title='%s', description='%s', eventTime='%s']",
                id, title, description, eventTime);
    }
}