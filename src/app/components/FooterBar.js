import { MdWhatsapp, MdEmail } from 'react-icons/md';
import about from '../constants/about';

export default function FooterBar() {
  return (
    <div className="xl:px-20 py-10 mb-20 flex justify-between">
      <h1 className='text-2xl font-burtons text-gray-600 dark:text-gray-400'></h1>
      <ul className="flex flex-col md:flex-row items-end md:items-center">
        <a href={`https://wa.me/${about.contact.phone.replace(/\s/g, '')}`}>
          <li className='flex flex-row items-center text-gray-600 dark:text-white hover:text-blue-500 hover:dark:text-blue-500 md:mr-8 mb-2 md:mb-0'>
            <MdWhatsapp className='text-md md:text-2xl mr-2 md:mr-3' />
            <h2 className='text-sm sm:text-md md:text-lg'>{about.contact.phone}</h2>
          </li>
        </a>
        <a href={`mailto:${about.contact.email}`}>
          <li className='flex flex-row items-center text-gray-600 dark:text-white hover:text-blue-500 hover:dark:text-blue-500 transition-colors duration-500'>
            <MdEmail className='text-md md:text-2xl mr-2 md:mr-3' />
            <h2 className='text-sm sm:text-md md:text-lg'>{about.contact.email}</h2>
          </li>
        </a>
      </ul>
    </div>
  )
}