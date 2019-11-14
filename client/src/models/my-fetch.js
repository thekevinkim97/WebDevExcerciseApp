const api_root = "http://localhost:9000/profile/";

export async function api(url){
    const response = await fetch(api_root + url);
    if(response.ok){
        return await response.json();
    }else{
        throw response.json();
    }
}