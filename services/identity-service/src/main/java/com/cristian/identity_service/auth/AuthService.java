package com.cristian.identity_service.auth;

import java.util.Locale;

import com.cristian.identity_service.User;
import com.cristian.identity_service.UserRepository;
import com.cristian.identity_service.dto.LoginRequest;
import com.cristian.identity_service.dto.RegisterRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import org.springframework.security.core.AuthenticationException;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
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
    public Authentication login(LoginRequest request) {
        String email = request.email().trim().toLowerCase(Locale.ROOT);

        try {
            return authenticationManager.authenticate(
                    UsernamePasswordAuthenticationToken.unauthenticated(
                            email,
                            request.password()
                    )
            );
        } catch (AuthenticationException exception) {
            throw new ResponseStatusException(
                    HttpStatus.UNAUTHORIZED,
                    "Invalid email or password"
            );
        }
    }
}
