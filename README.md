# Description

K6 example project for load testing in a mock API, using JavaScript.

## Dependencies

Only K6 is necessary to run this project, you can find the installation guide on the official Grafana page: https://grafana.com/docs/k6/latest/set-up/install-k6/

## Code

Test configuration: 5 minutes, 500 simultaneous virtual users, and a metric to assert that less than 1% fail.
Test execution
 - A random number between 0 and 499 is generated to complete the tested URL
 - Sends a GET request
 - Verifies that the status code should be 200, the response time should be less than 1 second, and the response body should not be empty.

```javascript
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    duration: '5m',
    vus: 500,
    http_req_failed: ['rate<0.01']
};

export default function () {
    const id = Math.floor(Math.random() * 500);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        'response time < 1s': (r) => r.timings.duration < 1000,
        'response body is not empty': (r) => r.body.length > 0,
    });

    sleep(1);
}
```

## Running with report

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js --out json=report.json
```
