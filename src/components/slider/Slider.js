import React, { useState, useEffect } from "react";
import "../../styles/Slider.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className=" w-full  min-h-[345px] relative ">
      {images.map((image, indexImage) => {
        let position = "nextSlide ";
        if (indexImage === index) {
          position = "activeSlide";
        }
        if (
          indexImage === index - 1 ||
          (index === 0 && indexImage === images.length - 1)
        ) {
          position = "lastSlide ";
        }
        return (
          <article className={position} key={indexImage}>
            <img
              src={image}
              alt="banner_Image"
              className=" w-full h-[500px] md:object-cover object-contain"
            />
          </article>
        );
      })}
    </div>
  );
};

export default Slider;
