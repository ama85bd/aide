import { RootStore } from './rootStore';
import {
  observable,
  action,
  reaction,
  makeObservable,
  toJS,
  runInAction,
} from 'mobx';
import Product from '../api/product';

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
          window.localStorage.setItem('commonJWT-aide', commonToken.token);
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
  };

  // get all cetagory
  @observable allCategories: Array<any> = [];
  @action getAllCat = async () => {
    try {
      const allCat = await Product.getAllCategory({});
      runInAction(() => {
        this.allCategories = allCat.OBJ;
      });
    } catch (error) {
      throw error;
    }
  };
}
