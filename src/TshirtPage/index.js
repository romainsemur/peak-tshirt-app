import TshirtCard from "TshirtCard";

export default function TshirtPage() {
  const tshirt = {
    id: 1,
    name: "Tshirt",
    description: "",
    imageUrl: "1.jpg",
    size: "M",
    price: 12.99,
  };
  return <TshirtCard {...tshirt} />;
}
