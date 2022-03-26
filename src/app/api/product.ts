import agent from '../services/agent';
import { IResponseBase } from '../models/baseModel';

const Product = {
  // get all category
  getAllCategory: (sc: {}): Promise<IResponseBase<any[]>> =>
    agent().post('/product/allcategory', sc),
  // get all brand
  getAllBrand: (sc: any): Promise<IResponseBase<any[]>> =>
    agent().post('/product/getbrand', sc),
  // get all company
  getAllCompany: (sc: any): Promise<IResponseBase<any[]>> =>
    agent().post('/product/getcompany', sc),
  // // get all brand
  // getAllBrand: (sc: {}): Promise<IResponseBase<any[]>> =>
  //   agent().post('/product/getbrand', sc),
  // get Product Category Menu
  getProductCategoryMenu: (sc: {}): Promise<IResponseBase<any[]>> =>
    agent().post('/product/categorymenu', sc),
};
export default Product;
