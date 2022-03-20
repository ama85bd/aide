import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history, showDismissAlert } from '../..';
import { IResponseBase } from '../models/baseModel';

//default instance
const client = axios.create({ baseURL: process.env.REACT_APP_API_URL });

//cancel token
const cancelSource = axios.CancelToken.source();

//request handle
function handleRequest(config: AxiosRequestConfig) {
  //get jwt
  const token = window.localStorage.getItem('jwt-aide');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  //cancel token to cancel request for any interrupted in api call
  config.cancelToken = cancelSource.token;
  return config;
}
//request error handle
function errorRequest(error: any) {
  return Promise.reject(error);
}
//response handle
function handleResponse(response: AxiosResponse<any>) {
  //do something with the response data
  const { status, data } = response;
  const { Message } = data as IResponseBase<object>;
  //duplicate
  if (status === 201) {
    if (Message !== null || Message !== '') {
      toast.warning(Message);
    }
  }
  return response;
}
//response error handle
function errorResponse(error: any) {
  if (error === undefined) {
    return Promise.reject(error);
  }
  //HANDLE WHEN API IS DOWN
  //handle network error
  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network error!', { toastId: 'network-error' });
    //cancelSource.cancel('Cancelled request due to network error!');
  }
  if (error.response !== undefined) {
    //HANDLE WHEN API IS LIVE
    //assign to new object to handle
    const { status, data, config, headers } = error.response;
    const { Message } = data as IResponseBase<object>;

    //bad request
    // if (status === 400 && config.method === 'get') {
    //   if (message !== null || message !== "") {
    //     toast.error(message);
    //   }
    // }

    //handle token expired
    if (
      status === 401 &&
      headers['www-authenticate'] !== undefined &&
      headers['www-authenticate']!.indexOf(
        'Bearer error="invalid_token", error_description="The token expired'
      ) > 0
    ) {
      // console.log(error.response);
      //FIXME: move to cookies
      window.localStorage.removeItem('jwt');
      history.push('/');
      toast.info('Your session has expired, please login again');
    } else if (
      status === 400 ||
      status === 404 ||
      status === 405 ||
      status === 406 ||
      status === 409 ||
      status === 500
    ) {
      if (Message !== null || Message !== '') {
        //delete with foreign key constrains error
        if (Message.includes('The DELETE statement conflicted')) {
          toast.error(
            'Unable to delete due to data constraints, please check if has any dependent records.'
          );
        } else {
          var urlStr = error.request.responseURL.toString();
          var url = new URL(urlStr);
          //set show dissmiss alert if found the param
          if (url.searchParams.get('showDismissAlert')) {
            showDismissAlert({ type: 'danger', message: Message });
          } else {
            toast.error(Message);
          }
        }
      }
    } else if (status === 401) {
      //only 401 when call multiple requests, just show 1 toast
      toast.error(Message, { toastId: 'unauthorized' });
    }
  }
  throw error.response;
}
//response transform
function responseBody(response: AxiosResponse) {
  return response.data as IResponseBase<any>;
}

const agent = () => {
  //default interceptors
  client.interceptors.request.use(handleRequest, errorRequest);
  client.interceptors.response.use(handleResponse, errorResponse);

  //methods
  const get = (url: string) => client.get(url).then(responseBody);
  const post = (url: string, body: {}) =>
    client.post(url, body).then(responseBody);
  const put = (url: string, body: {}) =>
    client.put(url, body).then(responseBody);
  const del = (url: string) => client.delete(url).then(responseBody);

  return { get, post, put, del };
};
export default agent;
