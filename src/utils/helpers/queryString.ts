export const queryString = (params: { [key: string]: boolean | number | string }) =>
  "?" +
  Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
