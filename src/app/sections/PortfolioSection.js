import portfolio from '../constants/portfolio';
import ImageCarousel from '../components/ImageCarousel';

export default function PortfolioSection() {
  return (
    <div className='text-center lg:p-2 py-16'>
      <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>{portfolio.title}</h3>
      <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
        {portfolio.description}
      </p>
      <div className='flex flex-row items-center flex-wrap py-10 max-w-5xl mx-auto mt-4'>
        <div className="relative w-full" data-carousel="static">
          <div className="relative h-144 md:h-80 lg:h-96 xl:h-128 overflow-hidden rounded-lg">
            {portfolio.projects.map((project) => (
              <div key={project.name} className="hidden duration-700 ease-in-out px-16 lg:px-16" data-carousel-item>
                <div className='flex flex-col md:flex-row w-full h-full bg-gradient-to-r from-blue-300 bg-violet-300 dark:from-blue-800 dark:to-violet-900 rounded-3xl p-4'>
                  <ImageCarousel images={project.images} />
                  <div className='flex-1 text-left md:pl-4'>
                    <h3 className='text-gray-600 dark:text-white font-bold text-xl mb-2'>{project.name}</h3>
                    <p className='text-gray-600 dark:text-white text-sm w-full h-20 md:h-56 lg:h-68 xl:h-96 overflow-clip'>{project.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {portfolio.projects.map((_, index) => (
              <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
            ))}
          </div>
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/80 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-indigo-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200/80 dark:bg-gray-800/30 group-hover:bg-gray-200 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-indigo-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
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