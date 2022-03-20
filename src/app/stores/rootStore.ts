import { createContext } from 'react';
import { configure, makeAutoObservable } from 'mobx';
import CommonStore from './commonstore';
import UserStore from './userStore';

configure({ enforceActions: 'always' });

export class RootStore {
  commonStore: CommonStore;
  userStore: UserStore;
  constructor() {
    this.commonStore = new CommonStore(this);
    this.userStore = new UserStore(this);

    //since no annotation (decorators) declared
    //need to call makeAutoObservable(this) instead
    //https://mobx.js.org/migrating-from-4-or-5.html
    makeAutoObservable(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
