package com.cristian.stockmarket.tradingservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {

    @GetMapping("/api/status")
    public StatusResponse getStatus() {
        return new StatusResponse("trading-service", "UP");
    }
}
