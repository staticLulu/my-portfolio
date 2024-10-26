"use client";

import { Box, Typography } from "@mui/material";

interface MyCardProps {
  title: string;
  description: any;
  icon: any;
}

const MyCard = ({ title, description, icon }: MyCardProps) => {
  return (
    <Box
      className='
        shadow-[0px_1px_5px_rgba(0,0,0,0.15)] 
        p-4 
        rounded-[16px] 
        bg-cardBG
        dark:bg-slate-600 
        dark:border 
        dark:border-slate-500
      '
    >
      <Box className='flex gap-2 items-start'>
        {icon}
        <Typography fontWeight='bold' className='dark:text-slate-200 text-lg'>
          {title}
        </Typography>
      </Box>
      <Typography className='dark:text-slate-400'>{description}</Typography>
    </Box>
  );
};

export default MyCard;
