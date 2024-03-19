export interface MediaProps {
  primary: string;
  secondary: string[];
}

export const MediaView = (props: MediaProps): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "21px",
        display: "inline-flex",
      }}
    >
      <img
        style={{ alignSelf: "stretch", height: "400px" }}
        src={props.primary}
      />
      <div
        style={{
          alignSelf: "stretch",
          height: "100px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "21px",
          display: "inline-flex",
        }}
      >
        <img
          style={{ flex: "1 1 0", alignSelf: "stretch" }}
          src="https://via.placeholder.com/184x100"
        />
        <img
          style={{ flex: "1 1 0", alignSelf: "stretch" }}
          src="https://via.placeholder.com/184x100"
        />
        <img
          style={{ flex: "1 1 0", alignSelf: "stretch" }}
          src="https://via.placeholder.com/184x100"
        />
      </div>
    </div>
  );
};
