import { IFetchProps } from "../../types";

class HttpError extends Error {
  response: { status: number; url: string };
  constructor(response: { status: number; url: string }) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

const loadJson = async (fetchFn: () => Promise<any>) => {
  let response = await fetchFn();
  if (response.status === 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
};

interface IConfigProps {
  method: string;
  headers: any;
  body?: string;
}

export const fetching = async ({ url, bodyParams, method }: IFetchProps) => {
  const fetchFn = () => {
    const config: IConfigProps = {
      method: bodyParams || method === "POST" ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (bodyParams) {
      config.body = JSON.stringify(bodyParams);
    }
    return fetch(url, config);
  };

  let response;
  try {
    response = await loadJson(fetchFn);
  } catch (err) {
    console.warn(err);
    if (err instanceof HttpError && err.response.status === 404) {
      console.log("ERROR HERE");
    } else {
      throw err;
    }
  }
  return response;
};
