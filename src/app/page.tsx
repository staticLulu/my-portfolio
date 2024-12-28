"use client";

import React, { ElementType, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ProfileSection from "./components/ProfileSection";
import TabComponents from "./components/TabComponents";
import HomeComponent from './components/Home';
import Resume from './components/Resume';
import Works from './components/Work';
import Contact from './components/Contact';
import { BiArrowToTop } from 'react-icons/bi';
import { Link as _ReactScrollLink, scroller } from "react-scroll";

const ReactScrollLink = _ReactScrollLink as ElementType;

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeHeight = document.getElementById('home')?.offsetHeight || 0;

      if (scrollPosition > homeHeight) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className='xs:grid md:flex gap-4 max-w-screen-xl mx-auto mt-10 md:p-4'>
      <Box flex={1} className='pt-[100px]'>
        <Box className="xs:p-4 md:p-0">
          <ProfileSection />
        </Box>
      </Box>

      <Box className="block md:hidden">
        <ReactScrollLink name="home" id="home">
          <HomeComponent />
        </ReactScrollLink>
        <ReactScrollLink name="resume" id="resume">
          <Resume />
        </ReactScrollLink>
        <ReactScrollLink name="works" id="works">
          <Works />
        </ReactScrollLink>
        <ReactScrollLink name="contact" id="contact">
          <Contact />
        </ReactScrollLink>

        {showScrollToTop && (
          <Button 
            onClick={scrollToTop} 
            variant="text" 
            sx={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              zIndex: 1000,
              borderRadius: '50%',
              minWidth: '50px',
              minHeight: '50px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#C8A1E0',
              color: "white"
            }}
          >
            <BiArrowToTop size={24}/>
          </Button>
        )}
      </Box>

      {/* TabComponents for tablet to desktop view */}
      <Box flex={2} className='hidden md:grid'>
        <TabComponents />
      </Box>
    </Box>
  );
};

export default Home;
