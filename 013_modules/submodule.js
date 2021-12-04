import http from "k6/http";

export function stage(url) {
    let res = http.get(url);
}