
package com.anurag.backend.controller;

import com.anurag.backend.model.Question;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class QuestionController {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @GetMapping("/api/questions")
    public List<Question> getQuestions(@RequestParam String topic)
            throws Exception {

        ClassPathResource resource =
                new ClassPathResource("questions.json");

        try (InputStream inputStream = resource.getInputStream()) {

            JsonNode root = objectMapper.readTree(inputStream);

            String topicKey = topic.toLowerCase()
                    .replace(" ", "-");

            JsonNode questionsNode =
                    root.path("questions").path(topicKey);

            if (questionsNode.isMissingNode()
                    || !questionsNode.isArray()) {
                return List.of();
            }

            return objectMapper.convertValue(
                    questionsNode,
                    new TypeReference<List<Question>>() {}
            );
        }
    }
}
