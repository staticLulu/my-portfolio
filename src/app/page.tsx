"use client";

import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ProfileSection from "./components/ProfileSection";
import TabComponents from "./components/TabComponents";
import HomeComponent from './components/Home';
import { Element as ScrollElement } from "react-scroll"; // Scroll element
import Resume from './components/Resume';
import Works from './components/Work';
import Contact from './components/Contact';
import { BiArrowToTop } from 'react-icons/bi';

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
    <Box className='xs:grid md:flex p-4 gap-4 max-w-screen-xl mx-auto'>
      <Box flex={1} className='pt-[100px]'>
        <ProfileSection />
      </Box>

      <Box className="block md:hidden">
        <ScrollElement name="home" id="home">
          <HomeComponent />
        </ScrollElement>
        <ScrollElement name="resume" id="resume">
          <Resume />
        </ScrollElement>
        <ScrollElement name="works" id="works">
          <Works />
        </ScrollElement>
        <ScrollElement name="contact" id="contact">
          <Contact />
        </ScrollElement>
      </Box>

      {/* TabComponents for tablet to desktop view */}
      <Box flex={2} className='hidden md:grid'>
        <TabComponents />
      </Box>

      {/* Scroll to Top button */}
      {showScrollToTop && (
        <Button 
          onClick={scrollToTop} 
          variant="contained" 
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
            borderRadius: '50%',
            minWidth: '50px',
            minHeight: '50px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <BiArrowToTop />
        </Button>
      )}
    </Box>
  );
};

export default Home;
