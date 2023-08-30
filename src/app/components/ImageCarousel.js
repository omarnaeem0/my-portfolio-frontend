import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageCarousel(props) {
  const { images } = props;
  const [selected, setSelected] = useState(0);
  const onNext = () => {
    if (selected === images.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }
  const onPrevious = () => {
    if (selected === 0) {
      setSelected(images.length - 1);
    } else {
      setSelected(selected - 1);
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      onNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [onNext])
  return (
    <div className="relative w-1/2 h-full bg-gradient-to-l from-blue-500/30 bg-violet-500/30 rounded-2xl">
      <div className="relative overflow-hidden rounded-lg h-full">
        {
          images.map((image, index) => (
            <Image key={index} src={image} className={`h-full w-auto py-4 m-auto absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-1000 ${selected === index ? 'opacity-100' : 'opacity-0'}`} alt="" />
          ))
        }
      </div>
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={onPrevious}>
        <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={onNext}>
        <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
      </button>
    </div>
  )
}