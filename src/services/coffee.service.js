import http from '../config/http.js';


export async function getCoffeeMenu()  { 
    
    try {

        const resp = await http.get();
        return resp.data;
    } catch(error){
        return error.AxiosError;
    }
}