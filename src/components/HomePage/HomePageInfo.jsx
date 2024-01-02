"use client";
import React from 'react'
import "@/styles/homepage.scss";
import { Typewriter } from 'react-simple-typewriter';
import SkillCard from './SkillCard';
import IntroSection from './IntroSection';

const HomePageInfo = () => {

  return (
    <div className='mainInfo_container'>
        <div className="padding_section">
          <h1 id='headline'>Hello World! <br />
          I&#39;m a {" "}
          <Typewriter
            words={['Team Lead', 'Data Scientist', "Full Stack Developer"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </h1>
          <IntroSection />
          <SkillCard />
        </div>
    </div>
  )
}

export default HomePageInfo