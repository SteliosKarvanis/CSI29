import { ImageGalleryProps } from "@/lib/types";
import { Carousel,Image } from "antd";

export const ImageGallery = (image_props: ImageGalleryProps): JSX.Element => {
  const image_names=image_props.images;
  return (
    <Carousel
      arrow
      style={{ width: "200px", height: "200px", alignItems: "center" }}
    >
      {image_names.map((image, index) => (
        <img key={index}
          src={image}
          style={{
            width: "auto",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </Carousel>
  );
};
