# 🧪 K6 Load Test: JSONPlaceholder Comments API

This project contains a K6 performance test script that simulates heavy traffic on the /comments/:id endpoint of the JSONPlaceholder API.

## 📜 Script Summary
- 🔄 Endpoint tested: https://jsonplaceholder.typicode.com/comments/:id
- 👥 Virtual users (VUs): 500
- 🕒 Duration: 5 minutes
- 🎯 Goal: Ensure response time, availability, and response integrity under load

## 🚀 How to Run

1. **Install K6**

- K6 is necessary to run this project. Use the official installation guide: https://grafana.com/docs/k6/latest/set-up/install-k6/

2. **Clone the repository**
```bash
git clone https://github.com/Ovzmwil/k6-example.git
cd k6-example
```

3. **Run test**
```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js --out json=report.json
```

## ⚙️ Test Logic
Randomly selects an ID from 1–500

Sends a GET request to /comments/:id

Performs checks:

- Response status is 200

- Response time is under 1 second

- Response body is not empty

## 📈 Thresholds
The following condition is set:
```javascript
http_req_failed: ['rate<0.01']
```
💥 Test fails if more than 1% of requests fail.

## 🧪 Sample Output
K6 will produce a CLI summary with:
- Request rate
- Duration stats
- Failures
- Threshold pass/fail

Detailed results will be produced with an HTML dashboard and a JSON report file. 
