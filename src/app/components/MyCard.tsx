'use client'

import { Box, Typography } from "@mui/material";
import { IoCodeSlash, IoCodeSlashOutline } from "react-icons/io5";

interface MyCardProps {
  backgroundColor?: string;
  title: string;
  description: string;
  icon: any;
}

const MyCard = ({ backgroundColor, title, description, icon }: MyCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
      }}
      className="shadow-sm p-4 rounded-[16px]"
    >
      <Box className="flex items-center gap-2">
        {icon}
        <Typography variant="h6" component="h3" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      <Typography>
        {description}
      </Typography>
    </Box>
  );
};

export default MyCard;
