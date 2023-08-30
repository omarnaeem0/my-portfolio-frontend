import portfolio from '../constants/portfolio';
import { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import greenerImages from '../../assets/projects/greener';
import Image from 'next/image';

export default function PortfolioSection() {
  const [page, setPage] = useState(0);
  return (
    <div className='text-center lg:p-10 py-16'>
      <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>{portfolio.title}</h3>
      <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
        {portfolio.description}
      </p>
      <div className='flex flex-row items-center gap-12 flex-wrap py-6 lg:px-10 max-w-5xl m-auto mt-4'>
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
          <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out px-16 lg:px-20" data-carousel-item="active">
              <div className='flex flex-col md:flex-row w-full h-96  bg-gradient-to-r from-blue-500/30 bg-violet-500/30 rounded-3xl p-4'>
                <ImageCarousel images={greenerImages} />
                <div className='flex-1 text-left pl-6'>
                  <h3 className='text-gray-600 dark:text-white font-bold text-xl mb-2'>{portfolio.projects[2].name}</h3>
                  <p className='text-gray-600 dark:text-white text-sm w-full text-ellipsis h-full'>{portfolio.projects[2].content}</p>
                </div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out px-20" data-carousel-item>
              <div>
                <Image src={greenerImages[1]} alt="" />
              </div>
            </div>
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          </div>
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-gray-800 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}