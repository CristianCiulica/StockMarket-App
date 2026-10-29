package com.cristian.identity_service.auth;

import com.cristian.identity_service.dto.RegisterRequest;
import com.cristian.identity_service.dto.UserResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService= authService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody RegisterRequest request){
        var user=authService.register(request);
        var response = UserResponse.fromUser(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);

    }
}
