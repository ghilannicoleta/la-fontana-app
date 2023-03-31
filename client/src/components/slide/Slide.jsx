import { useState, useEffect, useCallback } from "react";

export default function Slide() {
  const arrSlides = [
    {
      img: "https://images.unsplash.com/photo-1531664767453-dc714de6b3c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80",
    },
  ];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleNextSlide = useCallback(
    (slideIndex) => {
      let curentIndex = slideIndex;

      if (curentIndex === arrSlides.length) {
        curentIndex = 0;
      }

      if (curentIndex < 0) {
        curentIndex = arrSlides.length - 1;
      }

      setActiveSlideIndex(curentIndex);
    },
    [arrSlides.length]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide(activeSlideIndex + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeSlideIndex, handleNextSlide]);

  return (
    <div className="-mt-40 flex h-screen w-screen">
      {arrSlides.map((slide, index) => (
        <img
          src={slide.img}
          key={slide.id}
          alt="img"
          className={`h-full w-full object-cover object-bottom ${
            activeSlideIndex === index ? "block" : "hidden"
          }`}
        />
      ))}

      <button
        type="button"
        className="text-white absolute left-16 top-1/2 text-7xl"
        onClick={() => handleNextSlide(activeSlideIndex - 1)}
      >
        &#10094;
      </button>
      <button
        type="button"
        className="text-white absolute right-16  top-1/2 text-7xl"
        onClick={() => handleNextSlide(activeSlideIndex + 1)}
      >
        &#10095;
      </button>
    </div>
  );
}
