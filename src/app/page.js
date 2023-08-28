'use client'
import React from 'react';
import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import profilePic from '../../public/profile.png'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import ReactIcon from '../assets/icons/react.svg';
import ReactNativeIcon from '../assets/icons/reactnative.png';
import CSSIcon from '../assets/icons/css.svg';
import HTMLIcon from '../assets/icons/html.svg';
import MUIIcon from '../assets/icons/materialui.svg';
import GitIcon from '../assets/icons/git.svg';
import GithubIcon from '../assets/icons/github.svg';
import JSIcon from '../assets/icons/js.svg';
import TSIcon from '../assets/icons/typescript.svg';
import ReduxIcon from '../assets/icons/redux.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import VSCodeIcon from '../assets/icons/vscode.svg';
import SassIcon from '../assets/icons/sass.svg';
import JestIcon from '../assets/icons/jest.svg';

export default function Home() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    const dark = localStorage.getItem('darkMode');
    setDark(JSON.parse(dark));
  }, [])
  const setDarkMode = () => {
    setDark(!dark);
    localStorage.setItem('darkMode', !dark);
  }
  return (
    <div className={dark ? 'dark' : ''}>
      <div className='bg-white dark:bg-gray-900'>
        <Head>
          <title>Omar Naeem</title>
          <meta name='description' />
          <link rel='icon' href="/favicon.ico" />
        </Head>
        <main className='px-4 md:px-10 container mx-auto'>
          <section className='min-h-screen'>
            <nav className="lg:px-10 py-10 mb-12 flex justify-between">
              <h1 className='text-2xl font-burtons text-gray-900 dark:text-gray-400'>omar</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className='text-2xl cursor-pointer text-gray-800 dark:text-gray-400' onClick={setDarkMode} />
                </li>
                <li >
                  <a href="#" className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-md ml-8 text-white dark:text-gray-900">Resume</a>
                </li>
              </ul>
            </nav>
            <div className='flex justify-evenly flex-col lg:flex-row items-center my-10 lg:my-20'>
              <div className='lg:max-w-lg'>
                <div className='text-center lg:p-4 flex flex-col items-center'>
                  <h2 className='text-4xl lg:text-5xl py-2 lg:py-6 text-blue-500 font-medium'>Omar Naeem</h2>
                  <h3 className='text-xl max-w-sm lg:max-w-md lg:text-2xl py-2 text-gray-900 dark:text-white'>Front-End React and React-Native Developer</h3>
                  <p className='textsm max-w-md lg:text-md py-5 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
                    Frontend Developer providing services for developing Web applications using React and Android/iOS applications using React Native
                  </p>
                </div>
                <div className='text-3xl lg:text-4xl flex justify-center gap-10 lg:gap-12 py-2 text-gray-600 dark:text-gray-400'>
                  <a href="https://www.linkedin.com/in/omar-naeem-janjua" target="_blank">
                    <AiFillLinkedin />
                  </a>
                  <AiFillGithub />
                </div>
              </div>
              <div className='relative bg-gradient-to-r from-blue-500 to-indigo-500 image-frame overflow-hidden w-60 lg:w-80 h-60 lg:h-80 my-8 lg:my-10'>
                <Image src={profilePic} />
              </div>
            </div>
            <div className='text-center lg:p-10'>
              <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>My Tech Stack</h3>
              <p className='textsm lg:text-md py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
                Technologies I’ve been working with recently
              </p>
              <div className='flex flex-row justify-center gap-12 flex-wrap py-6 px-10 max-w-4xl m-auto mt-4'>
                <Image src={ReactIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={ReactNativeIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={ReduxIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={JSIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={TSIcon} className='h-13 lg:h-15 w-auto' />
                <Image src={VSCodeIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={HTMLIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={CSSIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={SassIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={TailwindIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={MUIIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={JestIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={GitIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={GithubIcon} className='h-14 lg:h-16 w-auto' />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
