class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

const loadJson = async fetchFn => {
  let response = await fetchFn();
  if (response.status === 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
};

export const fetching = async ({ url, queryParams }) => {
  const fetchFn = () => {
    const config = {
      method: queryParams ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (queryParams) {
      config.body = JSON.stringify(queryParams);
    }
    return fetch(url, config);
  };

  let response;
  try {
    response = await loadJson(fetchFn);
  } catch (err) {
    console.warn(err)
    if (err instanceof HttpError && err.response.status === 404) {
      console.log("ERROR HERE");
    } else {
      throw err;
    }
  }
  return response;
};
