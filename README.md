# 📊 Market Data Service

## 🧬 Architecture
* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Spring Boot 4.1.2

## 🔧 Prerequisites
* `JDK 25+`
* `Maven 3.x`

## 📐 Project Structure
```
market-data-service/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/
│       │       └── josef/
│       │           └── marketdataservice/
│       │               ├── controller/
│       │               │   └── MarketController.java
│       │               ├── service/
│       │               │   └── MarketService.java
│       │               └── MarketApplication.java
│       │
│       └── resources/
│           └── static/
│               ├── index.html
│               ├── script.js
│               └── style.css
```

## 🚀 Getting Started
1. Run `MarketApplication.java`
2. Open **http://localhost:8080**
3. Enter a ticker and click "Get Price"
