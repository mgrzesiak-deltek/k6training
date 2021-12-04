import http from 'k6/http';
import {check} from 'k6';

let url = "https://red-water-022d04b03.azurestaticapps.net"

export let options = { 
    stages: [{ duration: '20s', target: 200 },{ duration: '80s', target: 200 }, { duration: '10s', target: 0 }], 
    thresholds: {
        http_req_duration: ['avg<100']
    },
};

export default function () 
{ 
    let res = http.request('GET', url);
    let checkResult = check(res, {
        'response code': (res) => res.status == 200,
    });
    console.log("Check Result " + checkResult)
};