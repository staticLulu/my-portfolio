'use client'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";

interface MyCardProps {
  title: string;
  image: string;
  category: any;
  href: any;
  onClick?: () => void;
}

const WorkCard = ({ title, image, category, href, onClick }: MyCardProps) => {
  return (
    <Box 
      // target="_blank" 
      // href={href} 
      className="
        bg-cardBG
        dark:bg-slate-600 
        dark:border 
        dark:border-slate-500 
        rounded-[8px] 
        shadow-[0px_1px_5px_rgba(0,0,0,0.2)]
        p-2
        cursor-pointer
      "
      onClick={onClick}
    >
        <Image
          src={image}
          alt="image"
          width={450}
          height={450}
          priority
          unoptimized
          className="h-[150px] w-full object-cover rounded-t-[8px]"
        />
        <Box className="p-2 rounded-b-[8px]">
          <Typography gutterBottom variant="body2" component="div" className="dark:text-slate-400">
            {category}
          </Typography>
          <Typography variant="h6" className="dark:text-slate-200">
            {title}
          </Typography>
        </Box>
    </Box>
  );
};

export default WorkCard;
