import agent from '../services/agent';
import { IResponseBase } from '../models/baseModel';

const Product = {
  // get Product Category Menu
  getProductCategoryMenu: (sc: {}): Promise<IResponseBase<any[]>> =>
    agent().post('/product/categorymenu', sc),
};
export default Product;
