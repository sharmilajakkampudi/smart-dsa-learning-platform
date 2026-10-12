
package com.anurag.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class TopicController {

    @GetMapping("/api/topics")
    public List<String> getTopics() {
        return List.of(
            "Arrays",
            "Strings",
            "Bit Manipulation",
            "LinkedList",
            "Stacks",
            "Queues",
            "Searching and Sorting",
            "Recursion",
            "BackTracking",
            "Trees",
            "Dynamic Programming"
        );
    }
}
