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
import WebpackIcon from '../assets/icons/webpack.svg';
import JiraIcon from '../assets/icons/jira.svg';

export default function Home() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    const dark = localStorage.getItem('darkMode');
    setDark(JSON.parse(dark));
  }, [])
  const setDarkMode = () => {
    setDark(!dark);
    localStorage.setItem('darkMode', !dark);
  }
  return (
    <div className={`overflow-hidden h-screen ${dark ? ' dark' : ''}`}>
      <div className='z-10 fixed w-screen h-screen overflow-auto' >
        <Head>
          <title>Omar Naeem</title>
          <meta name='description' />
          <meta name="theme-color" content="#60a5fa"></meta>
          <meta name='viewport' content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densityDpi=device-dpi, minimal-ui' />
          <link rel='icon' href="/favicon.ico" />
        </Head>
        <main className='px-4 md:px-10 container mx-auto'>
          <section className='min-h-screen'>
            <nav className="xl:px-20 py-10 mb-12 flex justify-between">
              <h1 className='text-2xl font-burtons text-gray-600 dark:text-gray-400'></h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className='text-2xl cursor-pointer text-gray-600 dark:text-gray-400' onClick={setDarkMode} />
                </li>
                <li >
                  <a download="" href="Omar-Naeem-CV.pdf" className="bg-gradient-to-t lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-indigo-400 dark:to-indigo-500 px-4 py-2 rounded-md ml-8 text-white">Resume</a>
                </li>
              </ul>
            </nav>
            <div className='flex justify-between flex-col md:flex-row items-center my-10 lg:my-20 max-w-5xl mx-auto'>
              <div className='max-w-sm lg:max-w-lg'>
                <div className='text-center lg:py-4 flex flex-col items-center md:items-start'>
                  <h2 className='text-4xl lg:text-5xl py-2 lg:py-6 text-blue-500 font-medium'>Omar Naeem</h2>
                  <h3 className='text-xl max-w-sm lg:max-w-md lg:text-2xl py-2 text-gray-900 dark:text-white md:text-left'>Front-End React and React-Native Developer</h3>
                  <p className='max-w-md text-md lg:text-md py-5 leading-6 lg:leading-7 text-gray-800 dark:text-white md:text-left'>
                    Frontend Developer providing services for developing Web applications using React and Android/iOS applications using React Native
                  </p>
                </div>
                <div className='text-3xl lg:text-4xl flex justify-center md:justify-start gap-10 lg:gap-12 py-2 text-gray-600 dark:text-gray-400'>
                  <a href="https://www.linkedin.com/in/omar-naeem-janjua" target="_blank">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/omarnaeem0" target="_blank">
                    <AiFillGithub />
                  </a>
                </div>
              </div>
              <div className='relative bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-80 h-60 lg:h-80 my-8 lg:my-10'>
                <Image src={profilePic} />
              </div>
            </div>
            <div className='text-center lg:p-2 py-16'>
              <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>About Me</h3>
              <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
                My introduction
              </p>
              <div className='flex flex-row justify-center gap-12 flex-wrap py-6 px-4 lg:px-10 max-w-5xl m-auto mt-4'>
                <p className='text-md lg:text-md text-gray-900 dark:text-white'>
                  Hi, I am a creative and experienced software engineer with over 6 years of experience in delivering high-impact web and mobile solutions,
                  my objective is to continue leveraging my skills in translating designs into quality code and crafting intuitive application interfaces.
                  I am dedicated to pushing the boundaries of user experience through my proficiency in JavaScript, ReactJS, and React-Native.
                  My passion for staying updated with the latest best practices in development ensures that I consistently provide top-notch designs
                  that enhance user satisfaction. I am committed to contributing my expertise to create responsive web-based and innovative Android
                  and iOS mobile applications that drive success for clients and users alike.
                </p>
              </div>
              <div className='flex flex-row justify-between flex-wrap py-6 px-4 lg:px-10 max-w-5xl m-auto'>
                <div>
                  <h3 className='text-gray-900 dark:text-white font-bold text-2xl mb-2'>06+</h3>
                  <p className='text-gray-900 dark:text-white text-md w-24'>Years experience</p>
                </div>
                <div>
                  <h3 className='text-gray-900 dark:text-white font-bold text-2xl mb-2'>12+</h3>
                  <p className='text-gray-900 dark:text-white text-md w-24'>Completed projects</p>
                </div>
                <div>
                  <h3 className='text-gray-900 dark:text-white font-bold text-2xl mb-2'>06+</h3>
                  <p className='text-gray-900 dark:text-white text-md w-24'>Companies worked</p>
                </div>
              </div>
            </div>
            <div className='text-center lg:p-10 py-16'>
              <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>My Tech Stack</h3>
              <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
                {'Technologies I\’ve been working with'}
              </p>
              <div className='flex flex-row justify-center gap-12 flex-wrap py-6 px-10 max-w-5xl m-auto mt-4'>
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
                <Image src={WebpackIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={GitIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={GithubIcon} className='h-14 lg:h-16 w-auto' />
                <Image src={JiraIcon} className='h-14 lg:h-16 w-auto' />
              </div>
            </div>
            {/* <div className='text-center lg:p-10 py-16'>
              <h3 className='text-2xl lg:text-3xl py-2 font-semibold text-gray-600 dark:text-white'>Portfolio</h3>
              <p className='text-md lg:text-lg py-2 leading-6 lg:leading-8 text-gray-800 dark:text-white'>
                {'My most recent work'}
              </p>
              <div className='flex flex-row justify-center gap-12 flex-wrap py-6 px-10 max-w-5xl m-auto mt-4'>
                
              </div>
            </div> */}
          </section>
        </main>
      </div>
      <div className='bg-white dark:bg-gray-900 w-screen h-screen absolute overflow-clip' >
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 top-10 right-10 scale-150' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 top-4 right-4' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 hidden md:block top-24 left-44 lg:top-10 lg:left-20 scale-50' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 hidden md:block top-44 left-24 lg:-top-10 lg:left-0 scale-75' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 bottom-0 left-10 scale-150' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 -bottom-6 left-4' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 bottom-64 right-24 lg:-bottom-32 lg:right-0 scale-75' />
        <div className='absolute bg-gradient-to-b lg:bg-gradient-to-r from-blue-400 dark:from-blue-500 to-violet-500 dark:to-violet-600 image-frame overflow-hidden w-60 lg:w-96 h-60 lg:h-96 opacity-20 bottom-80 right-40 lg:-bottom-12 lg:right-20 scale-50' />
      </div>
    </div>
  )
}
