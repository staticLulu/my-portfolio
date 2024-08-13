'use client'

import { Box, Tab, Tabs } from "@mui/material"
import SectionComponent from "./SectionComponent"
import { MouseEventHandler, useState } from "react"
import WorkCard from "./WorkCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const WorkList = [
  {
    id: 1,
    image: 'https://i.pinimg.com/736x/3f/51/f3/3f51f31e9ffe762d0b0a8b0c38f7c1e7.jpg',
    title: 'Hello world?',
    category: 'Web Development'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/3f/51/f3/3f51f31e9ffe762d0b0a8b0c38f7c1e7.jpg',
    title: 'Hello world?',
    category: 'Web Development'
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/3f/51/f3/3f51f31e9ffe762d0b0a8b0c38f7c1e7.jpg',
    title: 'Hello world?',
    category: 'Web Development'
  }
];
const Works = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <SectionComponent title="Portfolio">
      <Box >
        <Box className="grid justify-end">
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example" 
            TabIndicatorProps={{ style: { display: 'none' } }}
          >
            <TabSection
              label="All"
              value={value}
              index={0}
              handleChange={handleChange}
            />
            <TabSection
              label="Web Development"
              value={value}
              index={1}
              handleChange={handleChange}
            />
            <TabSection
              label="Design"
              value={value}
              index={2}
              handleChange={handleChange}
            />
            <TabSection
              label="Mentorship"
              value={value}
              index={3}
              handleChange={handleChange}
            />

          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box className="grid grid-cols-2 gap-2.5">
            {WorkList.map((work: any, index: number) => (
              <WorkCard 
                key={index} 
                title="Hello World" 
                category="Web Development" 
                image={work.image}
              />
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box className="grid grid-cols-2 gap-2.5">
              {WorkList.map((work: any, index: number) => (
                <WorkCard 
                  key={index} 
                  title="Hello World" 
                  category="Web Development" 
                  image={work.image}
                />
              ))}
            </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box className="grid grid-cols-2 gap-2.5">
            {WorkList.map((work: any, index: number) => (
              <WorkCard 
                key={index} 
                title="Hello World" 
                category="Web Development" 
                image={work.image}
              />
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Box className="grid grid-cols-2 gap-2.5">
            {WorkList.map((work: any, index: number) => (
              <WorkCard 
                key={index} 
                title="Hello World" 
                category="Web Development" 
                image={work.image}
              />
            ))}
          </Box>
        </CustomTabPanel>
      </Box>
      </SectionComponent>
    </Box>
  )
}

const TabSection = ({ label, value, index, handleChange }: any) => {
  return (
    <Tab 
      label={label} 
      sx={{
        color: value === index ? '#674188' : 'gray',
        boxShadow: 'sm',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 600,
      }}
      onClick={(event: MouseEventHandler<HTMLDivElement> | any ) => handleChange(event, index)}
    />
  );
}

export default Works