'use client'

import { Box, Typography } from "@mui/material";
import Image from 'next/image';

interface MyCardProps {
  title: string;
  image: string;
  category: any;
}

const WorkCard = ({ title, image, category }: MyCardProps) => {
  return (
    <Box className="bg-[#F2F7FC] rounded-[8px] shadow-sm p-2">
        <Image
          src={image}
          alt="image"
          width={450}
          height={450}
          priority
          unoptimized
          className="h-[90px] w-full object-cover rounded-t-[8px]"
        />
        <Box className="p-2 rounded-b-[8px]">
          <Typography gutterBottom variant="body2" component="div" color="gray">
            {category}
          </Typography>
          <Typography variant="h5">
            {title}
          </Typography>
        </Box>
    </Box>
  );
};

export default WorkCard;
