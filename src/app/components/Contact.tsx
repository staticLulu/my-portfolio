'use client'

import { Box, Button, FormControl, FormLabel, TextField, Typography } from "@mui/material"
import SectionComponent from "./SectionComponent";
import { MdOutlineAttachEmail, MdOutlinePhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <Box className="grid grid-rows-2">
      <SectionComponent title="Contact">
        <Box className="grid gap-4 grid-cols-2 h-full">
          <SectionCard 
            title="Phone:" 
            icon={<MdOutlinePhoneInTalk className="w-[20px] h-[20px]"/>} 
            children="- hello world" 
            backgroundColor="#F2F7FC" 
          />
          <SectionCard 
            title="Email:" 
            icon={<MdOutlineAttachEmail className="w-[20px] h-[20px]"/>} 
            children="- hello world" 
            backgroundColor="#F2F7FC" 
          />
        </Box>
      </SectionComponent>
      <Box className="py-4 px-10 bg-[#F2F7FC] rounded-[12px] shadow-sm">
        <Typography>
          I am always open to discussing new project, opportunities
          in tech world, partnerships, and more so mentorship.
        </Typography>
        <form className="grid gap-4">
          <FormControl className="w-full">
            <Box>
              <FormLabel>Name:</FormLabel>
              <TextField variant="standard" fullWidth/>
            </Box>
            <Box>
              <FormLabel>Email:</FormLabel>
              <TextField variant="standard" fullWidth/>
            </Box>
            <Box>
              <FormLabel>Message:</FormLabel>
              <TextField variant="standard" fullWidth/>
            </Box>
          </FormControl>

          <Box className="flex justify-end">
            <Button 
              variant="outlined" 
              color="inherit" 
              className="rounded-full border border-[#674188]"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

interface MyCardProps {
  backgroundColor?: string;
  title: string;
  children: string;
  icon: any;
}

const SectionCard = ({ backgroundColor, title, children, icon }: MyCardProps) => {
  return (
    <Box className="p-4 rounded-[12px]"  sx={{ backgroundColor: backgroundColor, }}>
      <Box className="flex items-center gap-2">
        {icon}
        <Typography className="font-semibold text-[18px]">{title}</Typography>
      </Box>
      <Box className="pl-7">
        {children}
      </Box>
    </Box>
  )
}

export default Contact;