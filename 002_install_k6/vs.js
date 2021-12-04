import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {

};

let res = http.get('urlHere');
let res = http.post('urlHere', 'body', { 'headers': 'nameOfHeaders' });
