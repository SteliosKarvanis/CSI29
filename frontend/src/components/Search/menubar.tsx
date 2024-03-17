import { background_color_secondary } from "@/lib/constants";
import { Radio } from "antd";
import { useState } from "react";

export const SearchMenuBar = () => {
  const [size, setSize] = useState("comprar");
  return (
    <>
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
        style={{ width: "100%", display: "flex" }}
      >
        <Radio.Button
          value="comprar"
          style={{
            flex: 1,
            backgroundColor: background_color_secondary,
            textAlign: "center",
          }}
        >
          Comprar
        </Radio.Button>
        <Radio.Button
          value="alugar"
          style={{
            flex: 1,
            backgroundColor: background_color_secondary,
            textAlign: "center",
          }}
        >
          Alugar
        </Radio.Button>
      </Radio.Group>
    </>
  );
};
