import { button_color, company_name } from "@/lib/constants";
import { Button, Flex } from "antd";

export const HomeImage = (): JSX.Element => {
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap="small"
      style={{
        width: "100%",
        height: "750px",
        backgroundImage: "url(cover.jpg)",
        backgroundSize: "cover",
      }}
    >
      <p style={{ fontSize: "256px", fontFamily: "'Brush Script MT',cursive", color: "rgb(255, 218, 187)" }}>{company_name}</p>
      <p style={{ fontSize: "64px" , fontFamily: "'Brush Script MT',cursive", color: "rgb(255, 218, 187)" }}>Ache o imóvel ideal para você</p>
      <Button
        href="/search"
        shape="round"
        size="large"
        style={{ color: "white", background: button_color }}
      >
        Buscar
      </Button>
    </Flex>
  );
};
