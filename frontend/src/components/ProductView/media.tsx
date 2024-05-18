import { ImageGalleryProps } from "@/lib/types";
import { Carousel } from "antd";

export const ImageGallery = (props: ImageGalleryProps): JSX.Element => {
  return (
    <Carousel
      arrows
      style={{ width: props.size, height: "auto", alignItems: "center" }}
    >
      {props.images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};
