
package com.anurag.backend.controller;

import com.anurag.backend.model.Student;
import com.anurag.backend.model.StudentProgress;
import com.anurag.backend.repository.StudentProgressRepository;
import com.anurag.backend.repository.StudentRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/progress")
@CrossOrigin(
    origins = "http://localhost:5173",
    allowCredentials = "true"
)
public class ProgressController {

    private final StudentProgressRepository progressRepository;
    private final StudentRepository studentRepository;

    public ProgressController(
            StudentProgressRepository progressRepository,
            StudentRepository studentRepository) {
        this.progressRepository = progressRepository;
        this.studentRepository = studentRepository;
    }

    private Long getStudentId(HttpSession session) {
        Object value = session.getAttribute("studentId");

        if (value instanceof Number) {
            return ((Number) value).longValue();
        }

        return null;
    }

    private ResponseEntity<?> unauthorized() {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
            Map.of("message", "Please log in first.")
        );
    }

    @GetMapping
    public ResponseEntity<?> getProgress(
            @RequestParam String topic,
            HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        if (session == null) {
            return unauthorized();
        }

        Long studentId = getStudentId(session);

        if (studentId == null) {
            return unauthorized();
        }

        if (topic.isBlank()) {
            return ResponseEntity.badRequest().body(
                Map.of("message", "Topic is required.")
            );
        }

        List<StudentProgress> progress =
                progressRepository.findByStudent_IdAndTopic(
                        studentId, topic.trim());

        List<String> solvedQuestions = progress.stream()
                .filter(StudentProgress::isSolved)
                .map(StudentProgress::getQuestionName)
                .toList();

        return ResponseEntity.ok(solvedQuestions);
    }

    @PostMapping
    public ResponseEntity<?> saveProgress(
            @RequestBody Map<String, Object> body,
            HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        if (session == null) {
            return unauthorized();
        }

        Long studentId = getStudentId(session);

        if (studentId == null) {
            return unauthorized();
        }

        Object topicValue = body.get("topic");
        Object questionValue = body.get("questionName");

        if (!(topicValue instanceof String)
                || ((String) topicValue).isBlank()
                || !(questionValue instanceof String)
                || ((String) questionValue).isBlank()) {

            return ResponseEntity.badRequest().body(
                Map.of("message",
                    "Topic and question name are required.")
            );
        }

        String topic = ((String) topicValue).trim();
        String questionName = ((String) questionValue).trim();

        Student student = studentRepository.findById(studentId)
                .orElse(null);

        if (student == null) {
            session.invalidate();
            return unauthorized();
        }

        StudentProgress progress =
                progressRepository
                    .findByStudent_IdAndTopicAndQuestionName(
                        studentId, topic, questionName)
                    .orElseGet(StudentProgress::new);

        progress.setStudent(student);
        progress.setTopic(topic);
        progress.setQuestionName(questionName);
        progress.setSolved(true);

        StudentProgress saved = progressRepository.save(progress);

        return ResponseEntity.ok(
            Map.of(
                "message", "Progress saved",
                "id", saved.getId()
            )
        );
    }

    @DeleteMapping
    public ResponseEntity<?> removeProgress(
            @RequestParam String topic,
            @RequestParam String questionName,
            HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        if (session == null) {
            return unauthorized();
        }

        Long studentId = getStudentId(session);

        if (studentId == null) {
            return unauthorized();
        }

        if (topic.isBlank() || questionName.isBlank()) {
            return ResponseEntity.badRequest().body(
                Map.of("message",
                    "Topic and question name are required.")
            );
        }

        StudentProgress progress =
                progressRepository
                    .findByStudent_IdAndTopicAndQuestionName(
                        studentId,
                        topic.trim(),
                        questionName.trim())
                    .orElse(null);

        if (progress == null) {
            return ResponseEntity.ok(
                Map.of("message", "Progress already removed.")
            );
        }

        progressRepository.delete(progress);

        return ResponseEntity.ok(
            Map.of("message", "Progress removed.")
        );
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProgress(
            HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        if (session == null) {
            return unauthorized();
        }

        Long studentId = getStudentId(session);

        if (studentId == null) {
            return unauthorized();
        }

        List<StudentProgress> progress =
                progressRepository.findByStudent_Id(studentId);

        List<Map<String, Object>> result = progress.stream()
                .filter(StudentProgress::isSolved)
                .map(item -> Map.<String, Object>of(
                    "topic", item.getTopic(),
                    "questionName", item.getQuestionName()
                ))
                .toList();

        return ResponseEntity.ok(result);
    }
}
