package com.progressiveCareUnit.repositories;

import com.progressiveCareUnit.models.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends MongoRepository<Feedback,String> {

}
