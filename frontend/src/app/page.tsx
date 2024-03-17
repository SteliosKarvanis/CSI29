import { Col } from "antd";
import { NavBar } from "../components/NavBar";
import { Search } from "@/components/Search";
import { HomeImage } from "@/components/HomeScreen";
import { VerticalCardList } from "@/components/VerticalCardList";
import { VerticalCardProps, VerticalCardListProps } from "@/lib/types";
import { VerticalCard } from "@/components/VerticalCard";

export default function Home() {
  const cardsList: VerticalCardListProps = {
    name: "Em Alta",
    cards: [
      {
        city: "São Paulo",
        county: "São Paulo",
        street: "Rua das Flores, 123",
        price: 500000,
        pricePerSquareMeter: 5000,
        imgSrc: "house_example.jpg",
      },
      {
        city: "São Paulo",
        county: "São Paulo",
        street: "Rua das Flores, 123",
        price: 500000,
        pricePerSquareMeter: 5000,
        imgSrc: "house_example.jpg",
      },
      {
        city: "São Paulo",
        county: "São Paulo",
        street: "Rua das Flores, 123",
        price: 500000,
        pricePerSquareMeter: 5000,
        imgSrc: "house_example.jpg",
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
