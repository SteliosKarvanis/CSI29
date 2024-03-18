import { HomeImage } from "@/components/HomeScreen";
import { Search } from "@/components/Search";
import { VerticalCardList } from "@/components/VerticalCardList";
import { VerticalCardListProps } from "@/lib/types";
import { Col } from "antd";

export default function Home() {
  const cardsList: VerticalCardListProps = {
    name: "Em Alta",
    cards: [
      {
        id: "1",
        city: "São Paulo",
        county: "São Paulo",
        street: "Rua das Flores, 123",
        price: 500000,
        pricePerSquareMeter: 5000,
        imgSrc: "/house_example.jpg",
      },
      {
        id: "1",
        city: "São Paulo",
        county: "São Paulo",
        street: "Rua das Flores, 123",
        price: 500000,
        pricePerSquareMeter: 5000,
        imgSrc: "/house_example.jpg",
      },
      {
        id: "1",
        city: "São Paulo",
        county: "São Paulo",
        street: "Rua das Flores, 123",
        price: 500000,
        pricePerSquareMeter: 5000,
        imgSrc: "/house_example.jpg",
      },
    ],
  };
  return (
    <Col>
      <HomeImage />
      <Search />
      <VerticalCardList {...cardsList} />
      <VerticalCardList {...cardsList} />
      <VerticalCardList {...cardsList} />
    </Col>
  );
}
