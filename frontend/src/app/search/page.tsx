import { HorizontalCardList } from "@/components/HorizontalCardList";
import { Search } from "@/components/Search";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET_HORIZONTAL_CARD_LIST } from "../api/product/route";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = searchParams.query as string;
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
