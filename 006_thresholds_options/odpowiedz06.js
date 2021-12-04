import http from 'k6/http';
import {group} from 'k6';

const URL = "https://appxx.azurewebsites.net/"

export let options = { //options allow to configure your test rum
    vus: 10,
    stages: [{ duration: '20s', target: 10 },{ duration: '15s', target: 10 }, { duration: '5s', target: 0 }], 
    thresholds: {
        http_req_duration: ['avg<100'],
        'group_duration{group::: User Scenario::Log Out}' : ['avg < 10']
    },
};

export default function () {
    group('User Scenario' ,function(){
        group('Home' ,function(){
            http.request('GET', URL);
        });
        group('Log Out' ,function(){
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
            http.request('GET', URL);
        });
    });
}



