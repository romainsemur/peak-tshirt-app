import config from "react-global-configuration";
import { responseToJson } from "core/utils";

const API_BASE_URL = config.get(
  "API_BASE_URL",
  process.env.REACT_APP_API_BASE_URL
);

export const tshirts = {
  getList:
    ({ styleIds }) =>
    () => {
      const tshirtRoute = new URL(`${API_BASE_URL}/tshirts`);
      const { searchParams } = tshirtRoute;
      styleIds.forEach((styleId) => {
        searchParams.append("styleId", styleId);
      });
      return fetch(tshirtRoute.toString()).then(responseToJson);
    },
  getOne:
    ({ id }) =>
    () => {
      const tshirtRoute = new URL(`${API_BASE_URL}/tshirts/${id}`);

      return fetch(tshirtRoute.toString()).then(responseToJson);
    },
};
