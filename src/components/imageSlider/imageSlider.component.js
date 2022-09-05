import { useState } from "react";
import {
  SliderContainer,
  Slider,
  SliderImage,
  DotContainer,
  DotActive,
  DotPassive,
} from "./imageSlider.styles";

export const ImageSlider = ({ images }) => {
  const [active, setActive] = useState(0);

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <SliderContainer>
      <Slider
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={change}
      >
        {images.map((image, index) => (
          <SliderImage
            key={index}
            source={{
              uri: image.url,
            }}
          />
        ))}
      </Slider>
      <DotContainer>
        {images.map((i, index) => {
          const Dot = index === active ? DotActive : DotPassive;
          return <Dot key={index}>⬤</Dot>;
        })}
      </DotContainer>
    </SliderContainer>
  );
};
