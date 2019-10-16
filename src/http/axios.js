import axios from "axios";
import {ajaxadapter} from "./ajaxadapter";

const http = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 15000,
  headers: { "Cache-Control": "no-cache" },
  adapter:ajaxadapter
});

http.setToken = function(token) {
  this.defaults.headers.common["Authorization"] = "Bearer " + token;
};

export { http };
