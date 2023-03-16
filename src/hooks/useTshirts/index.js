import { useQuery } from "react-query";

export default function useTshirts() {
  const queryResponse = useQuery("tshirts", () =>
    fetch(
      "http://my-json-server.typicode.com/romainsemur/peak-tshirt-app/tshirts"
    ).then((response) => response.json())
  );

  return { ...queryResponse, tshirts: queryResponse.data };
}
