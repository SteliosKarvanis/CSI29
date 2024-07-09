import { HorizontalCardProps } from "@/lib/types";

export async function GET(url: string) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
}

export async function GET_HORIZONTAL_CARD_LIST(url: string) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responses = await res.json();

  const outputs: HorizontalCardProps[] = [];
  for (const response of responses) {
    let price;
    if (response["preco_compra"]) {
      price = response["preco_compra"];
    } else {
      price = response["preco_aluguel"];
    }
    let price_per_meter = price / response["metros_quadrados"];
    let imgSrc = null;
    if (response["images"]) {
      imgSrc = response["images"][0];
    }
    const card: HorizontalCardProps = {
      id: response["pk"],
      imgSrc: imgSrc,
      name: response["nome_residencia"],
      size: response["metros_quadrados"],
      price: price,
      pricePerSquareMeter: price_per_meter,
      isPetFriendly: response["pet_friendly"],
      withFurniture: response["mobiliado"],
      withAccessibility: response["acessibilidade"],
      parkingSpaces: response["estacionamento"],
      bathrooms: response["banheiros_total"],
      bedrooms: response["quartos_total"],
      toRent: response["alugar"],
      broker: {
        name: response["corretagem"],
        role: response["corretagem"],
        imgSrc: response["corretagem"],
      },
    };
    outputs.push(card);
  }
  return outputs;
}
