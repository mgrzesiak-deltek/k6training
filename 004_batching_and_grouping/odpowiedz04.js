import http from 'k6/http';
import {sleep, group} from 'k6';

let url = "https://appxx.azurewebsites.net/"
let request = { method: 'GET', url: url};
export default function () {
   let requestObject = [
    request,
    request
   ]

   let namedRequest = {
       'first': request,
       'second': request,
   }   
   
   group('Batch test', function() {
        group('Get 1 ', function () {
            http.batch(requestObject);
        });
        group('Get 2', function () {
            http.batch(namedRequest);
        });
    });
}