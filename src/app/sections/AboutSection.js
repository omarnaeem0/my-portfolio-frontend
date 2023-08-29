import constants from '../constants';

export default function AboutSection() {
  return (
    <div className='text-center lg:p-2 py-16'>
      <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>{constants.about.title}</h3>
      <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
        {constants.about.description}
      </p>
      <div className='flex flex-row justify-center gap-12 flex-wrap py-6 px-4 lg:px-10 max-w-5xl m-auto mt-4'>
        <p className='text-md lg:text-md text-gray-900 dark:text-white'>
          {constants.about.content}
        </p>
      </div>
      <div className='flex flex-row justify-between flex-wrap py-6 px-4 lg:px-10 max-w-5xl m-auto'>
        {constants.about.mainHighlights.map(highlight => (
          <div>
            <h3 className='text-gray-900 dark:text-white font-bold text-2xl mb-2'>{highlight.value}</h3>
            <p className='text-gray-900 dark:text-white text-md w-24'>{highlight.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}