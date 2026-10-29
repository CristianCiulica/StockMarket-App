package com.cristian.identity_service.auth;

import java.util.Locale;

import com.cristian.identity_service.User;
import com.cristian.identity_service.UserRepository;
import com.cristian.identity_service.dto.RegisterRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User register(RegisterRequest request){
        String email=request.email().trim().toLowerCase(Locale.ROOT);

        if(userRepository.existsByEmail(email))
            throw new ResponseStatusException(HttpStatus.CONFLICT,
                    "This email already exists!");
        String passwordHash = passwordEncoder.encode(request.password());
        User user=new User(email, passwordHash);

        return userRepository.save(user);
    }

}
