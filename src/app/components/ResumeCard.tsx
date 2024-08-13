'use client'

import { Box, Typography } from "@mui/material";

interface MyCardProps {
  position: any;
  date: string;
  company: string;
}

const ResumeCard = ({ position, date, company }: MyCardProps) => {
  return (
    <Box className="shadow-sm p-4 rounded-[16px] bg-[#F2F7FC]">
      <Typography className="text-sm text-gray-400">{date}</Typography>
      <Typography className="text-lg font-semibold">{position}</Typography>
      <Typography className="text-base">{company}</Typography>
    </Box>
  );
};

export default ResumeCard;
