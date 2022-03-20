import { RootStore } from './rootStore';
import { observable, action, reaction, makeObservable, toJS } from 'mobx';

export default class CommonStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    //the new version of mobx required to call this
    //to make class observable
    makeObservable(this);
    //reaction when values changed
    reaction(
      () => this.commonToken,
      (commonToken) => {
        if (commonToken) {
          window.localStorage.setItem(
            'commonJWT-aide',
            JSON.stringify(commonToken)
          );
        } else {
          window.localStorage.removeItem('commonJWT-aide');
        }
      }
    );
  }

  @observable commonToken: any | null =
    window.localStorage.getItem('commonJWT-aide');
  //FIXME: this is not a good approach to save login credentials
  //https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#jwt_persist
  @action setCommonToken = (commonToken: any | null) => {
    this.commonToken = commonToken;
    console.log('commonToken', commonToken);
  };
}
