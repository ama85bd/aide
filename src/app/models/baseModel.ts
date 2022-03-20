//response base for all response from api
export interface IAuthToken<T extends object> {
  access_token: string;
  client_id: string;
  expires_in: number;
  token_type: string;
  user_name: string;
}
export interface IResponseBase<T extends object> {
  access_token: any;
  IsSuccess: boolean;
  StatusCode: number;
  Message: string;
  OutputRowCount: number;
  OBJ: T;
}
export interface IGeneralUser {
  Username: string | undefined;
  Password: string | undefined;
  grant_type: string | undefined;
}

export interface ISortBy {
  id: string;
  desc: boolean;
}

export interface IRequestBase {
  pageIndex: number;
  pageSize: number;
  sortBy: ISortBy[];
}

//base model for select list item
export interface ISelectListItem {
  value: any;
  label: string;
  selected?: boolean;
}
