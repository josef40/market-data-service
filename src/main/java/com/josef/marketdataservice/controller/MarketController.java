package com.josef.marketdataservice.controller;

import com.josef.marketdataservice.service.MarketService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MarketController {
    private final MarketService service;

    // listens for javascript to fetch link: http://localhost:8080/stock?symbol=NVDA
    @GetMapping("/stock")
    public String getStock(@RequestParam String symbol) {
        return service.getStock(symbol);
    }
}