export interface IFetchProps {
  url: string;
  bodyParams?: {
    [key: string]: any;
  };
}

export interface IUseFormFetchResponse {
  status?: string;
  value?: any;
  message?: string;
}
