import { HorizontalCardList } from "@/components/HorizontalCardList";
import { HorizontalCardListProps } from "@/lib/types";

export default function Broker() {
  const card = {
    id: "1",
    imgSrc: "/house_example.jpg",
    name: "Casa Exemplo",
    size: 100,
    price: 100000,
    pricePerSquareMeter: 1000,
    isPetFriendly: true,
    withFurniture: true,
    withAccessibility: true,
    parkingSpaces: 2,
    bathrooms: 2,
    bedrooms: 2,
    toRent: true,
    broker: {
      name: "Vinicius Menezes",
      role: "Corretor Associado",
      imgSrc: "broker.png",
    },
  };
  const props: HorizontalCardListProps = {
    name: "My Ads",
    cards: [card, card, card],
  };
  return (
    <div>
      <HorizontalCardList isBrokerPage {...props} />;
    </div>
  );
};
