import { useState, useEffect, useCallback } from "react";

export default function Slide() {
  const arrSlides = [
    {
      img: "https://images.pexels.com/photos/2332685/pexels-photo-2332685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      img: "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    <div className="-mt-28 h-screen w-screen">
      {arrSlides.map((slide, index) => (
        <img
          src={slide.img}
          key={slide.id}
          alt="img"
          className={`h-full w-full object-cover ${
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
