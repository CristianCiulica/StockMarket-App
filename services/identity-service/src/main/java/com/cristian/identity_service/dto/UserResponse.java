package com.cristian.identity_service.dto;

import com.cristian.identity_service.User;

import java.time.Instant;
import java.util.UUID;

public record UserResponse(UUID id, String email, Instant createdAt) {

    public static UserResponse fromUser(User user) {
        return new UserResponse(
            user.getId(),
            user.getEmail(),
            user.getCreatedAt()
        );
    }
}
