import { HorizontalCardList } from "@/components/HorizontalCardList";
import { HorizontalCardListProps } from "@/lib/types";

export default function Broker() {
  const card = {
    imgSrc: "/house_example.jpg",
    city: "Bucuresti",
    county: "Ilfov",
    street: "Strada Exemplu",
    size: 100,
    price: 100000,
    pricePerSquareMeter: 1000,
    tags: [
      {
        imageSrc: "/bathroom.png",
        value: "2",
      },
      {
        imageSrc: "/car.png",
        value: "5",
      },
      {
        imageSrc: "/room.png",
        value: "3",
      },
      {
        imageSrc: "/size.png",
        value: "100",
      },
    ],
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
      <HorizontalCardList {...props} />;
    </div>
  );
};
