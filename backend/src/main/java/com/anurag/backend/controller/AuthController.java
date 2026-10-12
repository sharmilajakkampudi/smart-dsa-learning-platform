
package com.anurag.backend.controller;

import com.anurag.backend.dto.RegisterRequest;
import com.anurag.backend.model.Student;
import com.anurag.backend.repository.StudentRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(
    origins = "http://localhost:5173",
    allowCredentials = "true"
)
public class AuthController {

    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(
            StudentRepository studentRepository,
            PasswordEncoder passwordEncoder) {
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request) {

        if (request.getName() == null
                || request.getName().isBlank()
                || request.getEmail() == null
                || request.getEmail().isBlank()
                || request.getPassword() == null
                || request.getPassword().length() < 8) {

            return ResponseEntity.badRequest().body(
                Map.of(
                    "message",
                    "Enter your name and email, and a password of at least 8 characters."
                )
            );
        }

        String email = request.getEmail()
                .trim()
                .toLowerCase();

        if (studentRepository.existsByEmail(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                Map.of("message", "This email is already registered.")
            );
        }

        Student student = new Student(
                request.getName().trim(),
                email,
                passwordEncoder.encode(request.getPassword())
        );

        studentRepository.save(student);

        return ResponseEntity.status(HttpStatus.CREATED).body(
            Map.of("message", "Registration successful!")
        );
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody RegisterRequest request,
            HttpServletRequest servletRequest) {

        if (request.getEmail() == null
                || request.getEmail().isBlank()
                || request.getPassword() == null
                || request.getPassword().isBlank()) {

            return ResponseEntity.badRequest().body(
                Map.of("message", "Email and password are required.")
            );
        }

        String email = request.getEmail()
                .trim()
                .toLowerCase();

        Optional<Student> optionalStudent =
                studentRepository.findByEmail(email);

        if (optionalStudent.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                Map.of("message", "Invalid email or password.")
            );
        }

        Student student = optionalStudent.get();

        if (!passwordEncoder.matches(
                request.getPassword(),
                student.getPassword())) {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                Map.of("message", "Invalid email or password.")
            );
        }

        // Create a session and rotate its ID after successful login.
        
HttpSession session = servletRequest.getSession(false);

if (session == null) {
    session = servletRequest.getSession(true);
} else {
    servletRequest.changeSessionId();
}

session.setAttribute("studentId", student.getId());


        Map<String, Object> studentData = Map.of(
                "id", student.getId(),
                "name", student.getName(),
                "email", student.getEmail()
        );

        return ResponseEntity.ok(
            Map.of(
                "message", "Login successful!",
                "student", studentData
            )
        );
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(
            HttpServletRequest servletRequest) {

        HttpSession session = servletRequest.getSession(false);

        if (session != null) {
            session.invalidate();
        }

        return ResponseEntity.ok(
            Map.of("message", "Logged out successfully.")
        );
    }
}
