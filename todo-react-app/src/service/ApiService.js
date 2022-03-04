import {API_BASE_URL} from "../app-config";

// 백엔드와 통신을 위한 파라메타를 받아, fetch Api 호출하는 메서드 정의
export function call(api, method, request) {

    const options = {
        headers: new Headers({
            'Content-Type': "application/json"
        }),
        url: API_BASE_URL + api,
        method: method
    };

    if (request) {
        options.body = JSON.stringify(request);
    }
    return fetch(options.url, options).then(response => response.json())
}