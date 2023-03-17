import { useQuery } from "react-query";
import { tshirts } from "core/api";

export default function useTshirts({ styleIds }) {
  const queryResponse = useQuery(
    ["tshirts", { styleIds: Array.from(styleIds) }],
    tshirts.getList({ styleIds })
  );
  return { ...queryResponse, tshirts: queryResponse.data };
}
