import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import constants from '../constants';

export default function PortfolioSection() {
  return (
    <div className='text-center lg:p-10 py-16'>
      <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>{constants.portfolio.title}</h3>
      <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
        {constants.portfolio.description}
      </p>
      <div className='flex flex-row items-center gap-12 flex-wrap py-6 px-10 max-w-5xl m-auto mt-4'>
        <div className='text-gray-600 dark:text-white w-10 h-40 flex justify-center items-center'>
          <BsFillCaretLeftFill className='text-xl lg:text-2xl' />
        </div>
        <div className='flex flex-1 flex-row items-center justify-between'>
          {constants.portfolio.projects.map(project => (
            <div className='border-solid rounded-md overflow-clip xl:w-60'>
              <div className='bg-white xl:h-40 xl:w-60 pb-1'></div>
              <div className='text-left xl:h-40 bg-white/20 p-2'>
                <h3 className='text-gray-900 dark:text-white font-bold text-md p-1'>{project.name}</h3>
                <p className='text-gray-900 dark:text-white text-sm p-1 text-ellipsis'>{project.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='text-gray-600 dark:text-white w-10 h-40 flex justify-center items-center'>
          <BsFillCaretRightFill className='text-xl lg:text-2xl' />
        </div>
      </div>
    </div>
  )
}