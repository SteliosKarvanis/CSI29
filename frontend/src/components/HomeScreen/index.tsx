import { button_color, company_name } from "@/lib/constants";
import { Button, Flex } from "antd";

export const HomeImage = (): JSX.Element => {
  return (
    <Flex vertical  justify="center" align="center" gap="small"
      style={{
        width: "100%",
        height: "750px",
        backgroundImage: "url(house_example.jpg)",
        backgroundSize: "cover",
      }}
    >
      <p style={{ fontSize: "64px" }}>{company_name}</p>
      <p style={{ fontSize: "32px" }}>Ache o imovel ideal para voce</p>
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
