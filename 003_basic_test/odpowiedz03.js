import http from "k6/http";

const url = 'https://appxx.azurewebsites.net';

export default function func () {
    sendGet();
    sendPost();
}

function sendPost() {
    const data = {
        body: "imie",
        title: 'Post ode mnie'
    }

    const headers = {
        "Content-Type": "application/json"
    }
    http.request('POST', `${url}/post/add/newpost`, JSON.stringify(data), headers);
}

function sendGet() {
    http.request('GET', url);
}