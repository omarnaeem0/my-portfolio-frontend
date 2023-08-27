import React from 'react';
import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import cx from 'classnames';
import Image from 'next/image';
import profilePic from '../../public/profile.png'
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Omar Naeem</title>
        <meta name='description' />
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <main className='bg-white dark:bg-gray-900 px-4 md:px-10 container mx-auto'>
        <section className='min-h-screen'>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>omar</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className='text-2xl cursor-pointer' />
              </li>
              <li >
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='flex justify-evenly flex-col lg:flex-row items-center'>
            <div className='lg:max-w-lg'>
              <div className='text-center p-4 md:p-10'>
                <h2 className='text-4xl lg:text-5xl py-2 text-teal-500 font-medium '>Omar Naeem</h2>
                <h3 className='text-xl lg:text-2xl py-2'>Front-End React and React-Native Developer.</h3>
                <p className='textsm lg:text-md py-5 leading-6 lg:leading-8 text-gray-800'>Frontend Developer providing services for developing Web applications using React and Android/iOS applications using React Native</p>
              </div>
              <div className='text-3xl lg:text-4xl flex justify-center gap-12 lg:gap-16 py-3 text-gray-600'>
                <AiFillLinkedin />
                <AiFillGithub />
              </div>
            </div>
            <div className='relative bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full overflow-hidden w-60 lg:w-80 h-60 lg:h-80 mt-20'>
              <Image src={profilePic} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
