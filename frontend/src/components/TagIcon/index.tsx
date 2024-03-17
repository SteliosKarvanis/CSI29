import { TagProps } from "@/lib/types";

export const TagIcon = (props: TagProps): JSX.Element => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "10px",
        display: "inline-flex",
      }}
    >
      <img style={{ width: "40px", height: "40px" }} src={props.imageSrc} />
      <div
        style={{
          flex: "1 1 0",
          alignSelf: "stretch",
          color: "black",
          fontSize: "20px",
          fontFamily: "Inter",
          fontWeight: "500",
          lineHeight: "30px",
          wordWrap: "break-word",
        }}
      >
        {props.value}
      </div>
    </div>
  );
};
