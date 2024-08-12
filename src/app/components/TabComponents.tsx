'use client'

import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import HomeComponent from "./Home";
import Resume from "./Resume";
import Works from "./Works";
import Contact from "./Contact";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabComponents = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display:'grid', gap: 1 }}>
      <Box sx={{display:'flex', justifyContent:'end' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example" 
          className="bg-white border border-gray-200 rounded-xl p-2"
          TabIndicatorProps={{ style: { display: 'none' } }} // Hide the tab indicator
        >
          <TabSection
            icon={<IoHomeOutline className="w-[18px] h-auto"/>}
            label="Home"
            value={value}
            index={0}
            handleChange={handleChange}
          />
          <TabSection
            icon={<CgNotes className="w-[18px] h-auto"/>}
            label="Resume"
            value={value}
            index={1}
            handleChange={handleChange}
          />
          <TabSection
            icon={<MdWorkOutline className="w-[18px] h-auto"/>}
            label="Work"
            value={value}
            index={2}
            handleChange={handleChange}
          />
          <TabSection
            icon={<BiSolidContact className="w-[18px] h-auto"/>}
            label="Contact"
            value={value}
            index={3}
            handleChange={handleChange}
          />
        </Tabs>
      </Box> 
      <CustomTabPanel value={value} index={0}>
        <HomeComponent/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Resume/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Works/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Contact/>
      </CustomTabPanel>
    </Box>
  );
}

const TabSection = ({ label, icon, value, index, handleChange }: any) => {
  return (
    <Tab 
      label={label}
      icon={icon} 
      iconPosition="top"
      sx={{
        background: value === index ? 'linear-gradient(to right, #FF9C1A, #E80505)' : '#E1E8EF',
        color: value === index ? 'white' : 'black',
        borderRadius: '16px',
        boxShadow: 'sm',
        textTransform: 'capitalize',
        mx: 1,
        px: 0,
        py: 2,
        '&:hover': {
          background: value === index ? 'linear-gradient(to right, #fed7aa, #ea580c)': '#D0D7DF',
        },
      }}
      onClick={(event) => handleChange(event, index)}
    />
  );
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="bg-white shadow-sm rounded-xl"
    >
      {value === index && <Box sx={{p: 3, height: '700px'}}>{children}</Box>}
    </div>
  );
}

export default TabComponents;
