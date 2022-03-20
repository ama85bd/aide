import {
  observable,
  computed,
  action,
  runInAction,
  makeObservable,
  reaction,
} from 'mobx';
import { RootStore } from './rootStore';
import Auth from '../api/auth';
import qs from 'qs';
import { IAuthToken } from '../models/baseModel';

let general_user: any = {
  Username: process.env.REACT_APP_GENERAL_USERNAME,
  Password: process.env.REACT_APP_GENERAL_PASSWORD,
  grant_type: process.env.REACT_APP_GENERAL_GRANT_TYPE,
};
export default class UserStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    //the new version of mobx required to call this
    //to make class observable
    //https://stackoverflow.com/questions/66049212/observer-from-mobx-react-lite-not-working
    makeObservable(this);
  }

  //===========================================================

  @observable commonCredentials: any | null = null;

  @action getCommonToken = async () => {
    // console.log('general_user', qs.stringify(general_user));
    try {
      await Auth.getGeneralUserToken(qs.stringify(general_user)).then((r) => {
        runInAction(() => {
          this.commonCredentials = r;
        });
        const allInfoToken = {
          token: r.access_token,
          id: r.client_id,
          expire: r.expires_in,
          userName: r.user_name,
          type: r.token_type,
        };
        this.rootStore.commonStore.setCommonToken(allInfoToken);
      });
    } catch (error) {
      throw error;
    }
  };

  //#region Login & User functions

  // @observable loginCredentials: ILoginCredentials | null = null;

  // //need to save this.user to localStorage
  // @computed get isLoggedIn() {
  //   return !!this.loginCredentials;
  // }

  // @action login = async (values: ILoginFormValues) => {
  //   try {
  //     await Auth.login(values).then(r => {
  //       runInAction(() => {
  //         this.loginCredentials = r.result;
  //       })
  //       this.rootStore.commonStore.setToken(r.result.token);
  //     });
  //   }
  //   catch (error) {
  //     throw error;
  //   }
  // }

  // @action logout = () => {
  //   //remove token from store
  //   this.rootStore.commonStore.setToken(null);
  //   //remove current company id
  //   this.rootStore.commonStore.setCurrentCompany(null);
  //   this.loginCredentials = null;
  // }
}
