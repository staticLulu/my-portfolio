'use client'

import React from 'react';
import { Box, useTheme } from '@mui/material';
import ProfileSection from './components/ProfileSection';
import TabComponents from './components/TabComponents';

const Home = () => {
  return (
    <Box className="flex xs:w-full xs:m-0 xl:w-[1280px] xl:m-auto p-4 gap-4">
      <Box flex={1} className='pt-[100px]'>
        <ProfileSection />
      </Box>
      <Box flex={2} className="xs:hidden md:grid">
        <TabComponents />
      </Box>
    </Box>
  )
};

export default Home;
