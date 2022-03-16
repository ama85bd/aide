//response base for all response from api
export interface IResponseBase<T extends object> {
  IsSuccess: boolean;
  StatusCode: number;
  Message: string;
  OutputRowCount: number;
  OBJ: T;
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
