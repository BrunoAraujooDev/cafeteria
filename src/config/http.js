import axios from 'axios';

let api = 'https://api.sampleapis.com/coffee/hot';

const http = axios.create({
  baseURL: api,
});

http.defaults.headers['content-type'] = 'application/json';

export default http;