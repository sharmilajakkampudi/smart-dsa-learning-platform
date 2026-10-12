
package com.anurag.backend.repository;

import com.anurag.backend.model.StudentProgress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface StudentProgressRepository
        extends JpaRepository<StudentProgress, Long> {

    List<StudentProgress> findByStudent_IdAndTopic(
        Long studentId,
        String topic
    );

    Optional<StudentProgress> findByStudent_IdAndTopicAndQuestionName(
        Long studentId,
        String topic,
        String questionName
    );
    List<StudentProgress> findByStudent_Id(Long studentId);
}
