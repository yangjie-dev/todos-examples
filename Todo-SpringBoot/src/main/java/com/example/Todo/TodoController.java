package com.example.Todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/todos")
public class TodoController {
    @Autowired
    private TodoRepository repository;

    @GetMapping()
//    @CrossOrigin(origins = "http://localhost:3000")
    public List<Todo> GetTodos() {
        List<Todo> todos = repository.findAll();
        return todos;
    }

    @GetMapping("/{id}")
    Todo GetTodoById(@PathVariable String id) {
        return repository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping()
    Todo CreateTodo(@RequestBody Todo todo) {
        return repository.save(todo);
    }

    @PutMapping("/{id}")
    Todo UpdateTodoById(@PathVariable String id, @RequestBody Todo todo) {
        return repository.findById(id).map(t -> {
            t.text = todo.text;
            t.isCompleted = todo.isCompleted;
            return repository.save(t);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    void deleteEmployee(@PathVariable String id) {
        repository.deleteById(id);
    }
}
