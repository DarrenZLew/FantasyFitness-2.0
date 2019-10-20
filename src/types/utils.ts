export interface IFetchProps {
  url: string;
  bodyParams?: {
    [key: string]: any;
  };
  method?: string;
}

export interface IUseFormFetchResponse {
  status?: string;
  value?: any;
  message?: string;
}
