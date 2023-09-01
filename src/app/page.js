'use client'
import 'flowbite';
import React from 'react';
import Head from 'next/head';
import SkillsSection from './sections/SkillsSection';
import AboutSection from './sections/AboutSection';
import Background from './components/Background';
import PortfolioSection from './sections/PortfolioSection';
import IntroductionSection from './sections/IntroductionSection';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';

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
          <meta name='description' content="omar's portfolio"/>
          <meta name="theme-color" content="#60a5fa"></meta>
          <meta name='viewport' content='width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densityDpi=device-dpi, minimal-ui' />
          <link rel='icon' href="/favicon.ico" />
        </Head>
        <main className='px-4 md:px-10 container mx-auto'>
          <section className='min-h-screen'>
            <HeaderBar setDarkMode={setDarkMode} />
            <IntroductionSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <FooterBar/>
          </section>
        </main>
      </div>
      <Background />
    </div>
  )
}
