import { useEffect } from "react";

import Head from "next/head";
import Header from "../components/header";
import Welcome from "../components/welcome";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import AOS from "aos/dist/aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const Code = () => (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="currentcolor"
        strokeWidth="2"
        d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"
      />
    </svg>
  );

  return (
    <>
      <Head>
        <title>Chirag | Full Stack Developer</title>
        <meta
          name="description"
          content="A Full-Stack developer. Trying to build something great."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keyword"
          content="portfolio, javascript, Reactjs developer, Nextjs developer, chandigarh"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chirag | Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="JavaScript & Python Maniac, Full-Stack Learner"
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1569280273355014148/rvPQMPDc_400x400.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Welcome />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer>
          <p>
            © 2022 - Designed{"🌻"} and Developed{"❤"} by Chirag.
            <br />
            <Code /> with{" "}
            <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
              NextJs
            </a>
            . Hosted on
            <a href="https://vercel.com/" rel="noreferrer" target="_blank">
              {" "}
              Vercel.
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
