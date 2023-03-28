package com.example.Todo;

import org.springframework.data.annotation.Id;

public class Todo {
    @Id
    public String id;
    public String text;

    public boolean isCompleted;

    public Todo() {
    }

    public Todo(String text, boolean isCompleted) {
        this.text = text;
        this.isCompleted = isCompleted;
    }
}