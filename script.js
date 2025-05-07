import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    duration: '5m',
    vus: 500,
    http_req_failed: ['rate<0.01']
};

export default function () {
    const id = Math.floor(Math.random() * 500) + 1;
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    const res = http.get(url);

    check(res, {
        'is status 200': (r) => r.status === 200,
        'response time < 1s': (r) => r.timings.duration < 1000,
        'response body is not empty': (r) => r.body.length > 0,
    });

    sleep(1);
}