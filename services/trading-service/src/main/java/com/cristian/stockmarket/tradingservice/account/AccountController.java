package com.cristian.stockmarket.tradingservice.account;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {
    private final AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }
    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody CreateAccountRequest request){
        UUID id=request.userId();
        Account createdAccount = service.createAccount(id);

        return ResponseEntity.status(201).body(createdAccount);
    }
    @GetMapping("/{id}")
    public Account getAccount(@PathVariable UUID id) {
        return service.getAccount(id);
    }

}
