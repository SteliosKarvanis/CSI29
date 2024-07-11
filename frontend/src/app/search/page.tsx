"use client";

import { HorizontalCardList } from "@/components/HorizontalCardList";
import { Search } from "@/components/Search";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { useSearchParams } from "next/navigation";
import { GET_HORIZONTAL_CARD_LIST } from "../api/product/route";

export default async function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const fetchData = async (query: string | null) => {
    // Example: Fetch data from an API
    if (!query) return [];
    const url = `http://backend:8000/endpoints/search?query=${query}`;
    return await GET_HORIZONTAL_CARD_LIST(url);
  };

  const responses = await fetchData(search);
  const cardsList: HorizontalCardListProps = {
    name: "Resultados",
    cards: responses,
  };
  return (
    <Col>
      <Search />
      <HorizontalCardList {...cardsList} />
    </Col>
  );
}
