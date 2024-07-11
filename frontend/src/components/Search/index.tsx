"use client";

import { background_color_secondary, button_color } from "@/lib/constants";
import { Button, Collapse, CollapseProps, Flex, Input } from "antd";
import { useState } from "react";
import { SearchForms } from "./forms";
import { SearchMenuBar } from "./menubar";

export const Search = (): JSX.Element => {
  const [text, setText] = useState("");
  const handleInputChange = (e) => {
    let new_text = "?query=" + e.target.value;
    setText(new_text);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Mais Opcoes",
      children: <SearchForms />,
    },
  ];
  return (
    <div
      style={{
        paddingRight: "20%",
        paddingLeft: "20%",
        paddingBottom: "50px",
        paddingTop: "50px",
        background: background_color_secondary,
      }}
    >
      <Flex gap="middle" vertical>
        <p style={{ fontSize: "32px", color: "black", textAlign: "center" }}>
          Busque o seu imovel ideal
        </p>
        <SearchMenuBar />
        <div>
          <p style={{ color: "black" }}>Endereco (Rua, Bairro, CEP, cidade)</p>
          <Input
            placeholder="E.g. Campus do CTA"
            size="large"
            onChange={handleInputChange}
          />
        </div>
        <Collapse ghost items={items} />
        <Button
          href={"/search" + text}
          block
          size="large"
          style={{ background: button_color, color: "white" }}
        >
          Buscar
        </Button>
      </Flex>
    </div>
  );
};
