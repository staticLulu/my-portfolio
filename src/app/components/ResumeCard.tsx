'use client'

import { Box, Typography } from "@mui/material";

interface MyCardProps {
  position: any;
  date: string;
  company: string;
}

const ResumeCard = ({ position, date, company }: MyCardProps) => {
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
      <Typography className="text-sm text-slate-400 dark:text-slate-400">{date}</Typography>
      <Typography className="text-lg font-semibold dark:text-slate-200">{position}</Typography>
      <Typography className="text-base dark:text-slate-400">{company}</Typography>
    </Box>
  );
};

export default ResumeCard;