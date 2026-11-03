package com.josef.marketdataservice.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MarketService {

    @Value("${finnhub.api.key}")
    private String key;

    private final RestTemplate restTemplate = new RestTemplate();

    // sends a request to finnhub with stock tickerand returns a string
    public String getStock(String symbol) {
        String url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + key;
        return restTemplate.getForObject(url, String.class);
    }
}
