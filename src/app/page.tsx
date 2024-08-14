'use client'

import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import ProfileSection from './components/ProfileSection';
import TabComponents from './components/TabComponents';
import MobileProfileSection from './components/MobileResponsive';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen size is xs or sm

  return isMobile ? (
    <Box className="w-full p-4">
      <ProfileSection />
    </Box>
  ) : (
    <Box className="flex xs:w-full xs:m-0 xl:w-[1280px] xl:m-auto md:p-4 gap-4">
      <Box flex={1} className='pt-[100px]'>
        <ProfileSection />
      </Box>
      <Box flex={2} className="xs:hidden md:grid">
        <TabComponents />
      </Box>
    </Box>
  );
};

export default Home;
