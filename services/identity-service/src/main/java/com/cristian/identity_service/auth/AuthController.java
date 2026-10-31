package com.cristian.identity_service.auth;

import com.cristian.identity_service.dto.RegisterRequest;
import com.cristian.identity_service.dto.UserResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cristian.identity_service.dto.LoginRequest;
import com.cristian.identity_service.dto.LoginResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final SecurityContextRepository securityContextRepository;

    public AuthController(AuthService authService, SecurityContextRepository securityContextRepository ){
        this.authService= authService;
        this.securityContextRepository=securityContextRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@Valid @RequestBody RegisterRequest request){
        var user=authService.register(request);
        var response = UserResponse.fromUser(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request,
                                               HttpServletRequest servletRequest,
                                               HttpServletResponse servletResponse){
        Authentication authentication = authService.login(request);

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);
        SecurityContextHolder.setContext(context);

        securityContextRepository.saveContext(
                context,
                servletRequest,
                servletResponse
        );

        return ResponseEntity.ok(new LoginResponse(authentication.getName()));
    }

    @GetMapping("/me")
    public ResponseEntity<LoginResponse> me(Authentication authentication) {
        return ResponseEntity.ok(new LoginResponse(authentication.getName()));
    }


    @PostMapping("/logout")
    public ResponseEntity<Void> logout(
            HttpServletRequest servletRequest,
            HttpServletResponse servletResponse,
            Authentication authentication) {
        SecurityContextLogoutHandler logoutHandler = new SecurityContextLogoutHandler();

        logoutHandler.logout(
                servletRequest,
                servletResponse,
                authentication
        );

        return ResponseEntity.noContent().build();
    }
}
