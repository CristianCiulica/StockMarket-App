package com.cristian.market_data_service.quote;

import java.math.BigDecimal;
import java.time.Instant;

public class Quote {
    private final String symbol;
    private final BigDecimal price;
    private final String currency;
    private final Instant marketTimestamp;


    public Quote(String symbol, BigDecimal price, String currency, Instant marketTimestamp) {
        this.symbol = symbol;
        this.price = price;
        this.currency = currency;
        this.marketTimestamp = marketTimestamp;
    }

    public String getSymbol() {
        return symbol;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getCurrency() {
        return currency;
    }

    public Instant getMarketTimestamp() {
        return marketTimestamp;
    }
}
