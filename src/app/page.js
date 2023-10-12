import "flowbite";
import Head from "next/head";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import Background from "./components/Background";
import PortfolioSection from "./sections/PortfolioSection";
import IntroductionSection from "./sections/IntroductionSection";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import QualificationSection from "./sections/QualificationSection";
import ThemeContextWrapper from "./context/ThemeContextWrapper";
import { Suspense } from "react";
import { Blob } from "./components/Blob";

export default function Home() {
  return (
    <ThemeContextWrapper>
      <div className="z-10 fixed w-screen h-full overflow-auto">
        <Head>
          <title>Omar Naeem</title>
          <meta name="description" content="omar's portfolio" />
          <meta name="theme-color" content="#60a5fa"></meta>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, target-densityDpi=device-dpi, minimal-ui"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="px-4 md:px-10 container mx-auto">
          <section className="min-h-screen">
            <Suspense
              fallback={
                <div className="w-full h-screen flex justify-center items-center">
                  <Blob loading className="w-20 h-20 m-auto" />
                </div>
              }
            >
              <HeaderBar />
              <IntroductionSection />
              <AboutSection />
              <SkillsSection />
              <QualificationSection />
              <PortfolioSection />
              <FooterBar />
            </Suspense>
          </section>
        </main>
      </div>
      <Background />
    </ThemeContextWrapper>
  );
}
