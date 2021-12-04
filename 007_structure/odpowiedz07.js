import http from 'k6/http';
import { check } from 'k6';

let url = 'https://appxx.azurewebsites.net/'

export function setup() {
    let res = http.get(url);
    let data = 
    {
        body: res.body,
        title: res.title
    };
    return data;
}
export default function (data) {
    let body = JSON.stringify({
        body: data['body'],
        title: data['title']
    })
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let res = http.post(`${url}/post/add/newpost`, body, params);
    check(res, {'code': (res) => res.status == 201});
}
