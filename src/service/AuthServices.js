import { http } from "../http/axios";
import {apis } from "../api";

export const auhtService = {
  login
};

function login(credentials) {
  return new Promise((resolve, reject) => {
    http
      .post(apis.routes.auth.login, {
        email: credentials.email,
        password: credentials.password
      })
      .then(res => {
        resolve(res.data.data);
      })
      .catch(err => {
        reject(err.response);
      });
  });
}
