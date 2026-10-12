
package com.anurag.backend.model;

import jakarta.persistence.*;

@Entity
@Table(
    name = "student_progress",
    uniqueConstraints = {
        @UniqueConstraint(
            columnNames = {
                "student_id",
                "topic",
                "question_name"
            }
        )
    }
)
public class StudentProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Column(nullable = false, length = 100)
    private String topic;

    @Column(name = "question_name", nullable = false, length = 255)
    private String questionName;

    @Column(nullable = false)
    private boolean solved = true;

    public StudentProgress() {
    }

    public Long getId() {
        return id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getQuestionName() {
        return questionName;
    }

    public void setQuestionName(String questionName) {
        this.questionName = questionName;
    }

    public boolean isSolved() {
        return solved;
    }

    public void setSolved(boolean solved) {
        this.solved = solved;
    }
}
