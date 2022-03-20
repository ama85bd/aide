import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history, showDismissAlert } from '../..';
import { IAuthToken } from '../models/baseModel';

//default instance
const client = axios.create({ baseURL: process.env.REACT_APP_AUTH_URL });

//cancel token
const cancelSource = axios.CancelToken.source();

//request handle
// function handleRequest(config: AxiosRequestConfig) {
//   //get jwt
//   const token = window.localStorage.getItem('jwt-aide');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   //cancel token to cancel request for any interrupted in api call
//   config.cancelToken = cancelSource.token;
//   return config;
// }
// //request error handle
// function errorRequest(error: any) {
//   return Promise.reject(error);
// }
//response handle

//response transform
function responseBody(response: AxiosResponse) {
  return response.data as IAuthToken<any>;
}

const agentAuth = () => {
  //default interceptors
  // client.interceptors.request.use(handleRequest, errorRequest);
  // client.interceptors.response.use(handleResponse, errorResponse);

  //methods
  const get = (url: string) => client.get(url).then(responseBody);
  const post = (url: string, body: {}) =>
    client.post(url, body).then(responseBody);
  const put = (url: string, body: {}) =>
    client.put(url, body).then(responseBody);
  const del = (url: string) => client.delete(url).then(responseBody);

  return { get, post, put, del };
};
export default agentAuth;
