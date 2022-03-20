import axios from 'axios';
import agentAuth from '../services/agentAuth';
import { IAuthToken, IGeneralUser, IResponseBase } from '../models/baseModel';

const Auth = {
  // get general user token
  getGeneralUserToken: (sc: any): Promise<IAuthToken<any>> =>
    agentAuth().post('/token', sc),
};
export default Auth;
