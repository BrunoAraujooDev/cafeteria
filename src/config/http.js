import axios from 'axios';

let api = '../db.json';

const http = axios.create({
  baseURL: api,
});

http.defaults.headers['content-type'] = 'application/json';

export default http;