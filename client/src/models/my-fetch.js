const api_root = "http://localhost:9000/profile/";

export function api(url){
    return fetch(api_root + url).then(x=> x.json() );
}