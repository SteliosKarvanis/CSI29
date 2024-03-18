import { background_color_default, button_color } from "@/lib/constants";
import { Button, Flex } from "antd";

export const NavBar = (): JSX.Element => {
  const links = [
    { name: "Corretora", url: "/" },
    { name: "Alugar", url: "/search" },
    { name: "Comprar", url: "/search" },
    { name: "Busca", url: "/search" },
    { name: "Financiamento", url: "/financiamento" },
    { name: "Anunciar", url: "/anunciar" },
  ];
  const buttons = [
    { name: "Criar Conta", url: "/signin" },
    { name: "Entrar", url: "/login" },
  ];
  const navbar_style = {
    width: "100%",
    height: "100%",
    padding: "20px",
    background: background_color_default,
  };
  return (
    <Flex style={navbar_style} justify="space-between" align="center">
      <Flex gap="middle">
        {links.map((link, index) => (
          <Button
            type="text"
            href={link.url}
            style={{ color: "white" }}
            size="large"
          >
            {link.name}
          </Button>
        ))}
      </Flex>
      <Flex gap="middle">
        {buttons.map((button, index) => (
          <Button
            href={button.url}
            shape="round"
            size="large"
            style={{ background: button_color, color: "white"}}
          >
            {button.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
