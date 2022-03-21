import agent from '../services/agent';
import { IResponseBase } from '../models/baseModel';

const Product = {
  // get all category
  getAllCategory: (sc: {}): Promise<IResponseBase<any[]>> =>
    agent().post('/product/allcategory', sc),
  // get Product Category Menu
  getProductCategoryMenu: (sc: {}): Promise<IResponseBase<any[]>> =>
    agent().post('/product/categorymenu', sc),
};
export default Product;
