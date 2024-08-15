'use client'

import { Box, Typography } from "@mui/material";
import { IoCodeSlash, IoCodeSlashOutline } from "react-icons/io5";

interface MyCardProps {
  title: string;
  description: any;
  icon: any;
}

const MyCard = ({ title, description, icon }: MyCardProps) => {
  return (
    <Box
      className="
        shadow-sm 
        p-4 
        rounded-[16px] 
        bg-[#F2F7FC] 
        dark:bg-slate-600 
        dark:border 
        dark:border-slate-500
      "
    >
      <Box className="flex gap-2">
        {icon}
        <Typography 
          fontWeight="bold" 
          className="dark:text-slate-200 text-lg"
        >
          {title}
        </Typography>
      </Box>
      <Typography className="dark:text-slate-400">{description}</Typography>
    </Box>
  );
};

export default MyCard;
