package com.cristian.identity_service;

import java.util.Date;
import java.util.UUID;

public class User {
    private final UUID id;
    private final String email;
    private final String passwordHash;
    private final Date dateCreated;

    public User(UUID id, String email, String passwordHash, Date dateCreated){
        this.id=id;
        this.email=email;
        this.dateCreated=dateCreated;
        this.passwordHash=passwordHash;
    }

    public UUID getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public Date getDateCreated() {
        return dateCreated;
    }
}
