package com.cristian.stockmarket.tradingservice.account;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
public class AccountService {
    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }
    public Account createAccount(UUID userId){
        if(repository.existsByUserId(userId)){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "A demo account already exists for this user!");
        }


        Account account=new Account(userId);
        return repository.save(account);
    }

    public Account getAccount(UUID id) {
        return repository.findById(id).
                orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Account not found"));
    }
}
