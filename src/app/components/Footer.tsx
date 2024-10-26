"use client";

import { Box } from '@mui/material';
import { IoMdHeartEmpty } from 'react-icons/io';

const Footer = () => {
  return (
    <Box 
      className="
        flex 
        justify-center 
        mt-5 
        dark:bg-slate-700 
        dark:text-white 
        bg-[#F2F5F9] 
        border-t 
        border-slate-200
        dark:border-slate-600
        py-4
        gap-1
      "
    >
      Made with 
      <IoMdHeartEmpty size={24} className='text-[#C8A1E0]'/> 
      by Dang Makara
    </Box>
  )
};

export default Footer;
