import { CircularProgress } from "@mui/material";
import useTshirt from "core/hooks/useTshirt";
import { useParams } from "react-router-dom";
import TshirtCard from "../TshirtCard";

export default function TshirtPage() {
  let { tshirtId: id } = useParams();

  const { isLoading, tshirt } = useTshirt({ id });

  if (isLoading) return <CircularProgress />;

  return <TshirtCard {...tshirt} />;
}
