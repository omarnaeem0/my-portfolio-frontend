import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function ImageCarousel(props) {
  const { images } = props;
  const [selected, setSelected] = useState(0);
  const onNext = useCallback(() => {
    if (selected === images.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }, [setSelected, selected, images]);
  const onPrevious = useCallback(() => {
    if (selected === 0) {
      setSelected(images.length - 1);
    } else {
      setSelected(selected - 1);
    }
  }, [setSelected, selected, images]);
  useEffect(() => {
    const timer = setInterval(() => {
      onNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [onNext]);
  return (
    <div className="relative bg-white/50 dark:bg-gray-900/20 rounded-3xl h-80 lg:h-full w-full lg:w-128 xl:w-128 lg:mb-0">
      <div className="relative overflow-hidden rounded-lg h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            className={`object-contain max-h-full w-auto m-auto absolute top-1/2 left-1/2 transition-all duration-500 p-4 ${
              selected === index ? "opacity-100" : `${selected > index ? "-" : ""}translate-x-full opacity-0`
            }`}
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ))}
      </div>
      <div className="absolute bottom-5 flex flex-row w-full justify-center items-center ">
        <button
          type="button"
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={onPrevious}
        >
          <svg className="w-4 h-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
        <p className="text-indigo-500 text-sm lg:text-sm overflow-clip">
          {selected + 1} / {images.length}
        </p>
        <button
          type="button"
          className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={onNext}
        >
          <svg className="w-4 h-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
