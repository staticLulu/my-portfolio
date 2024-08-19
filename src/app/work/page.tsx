'use client'

import { Box, Tab, Tabs } from "@mui/material"
import { MouseEventHandler, useState } from "react"
import SectionComponent from "../components/SectionComponent";
import WorkCard from "../components/WorkCard";

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
    image: '/images/ui.jpg',
    title: 'Family Registration Figma',
    category: 'Design',
    href: 'https://my-portfolio-pi-green-95.vercel.app/'
  },
  {
    id: 2,
    image: '/images/landing.jpg',
    title: 'Family Registration Landing Page',
    category: 'Web Development',
     href: 'https://my-portfolio-pi-green-95.vercel.app/'
  },
  {
    id: 3,
    image: '/images/admin.jpg',
    title: 'Family Registration Back office',
    category: 'Web Development',
     href: 'https://my-portfolio-pi-green-95.vercel.app/'
  },
 
  {
    id: 4,
    image: '/images/e-commerce.jpg',
    title: 'E-commerce',
    category: 'Web Development',
     href: 'https://my-portfolio-pi-green-95.vercel.app/'
  },
];
const Works = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className='p-5'>
      <SectionComponent title="Portfolio">
      <Box>
        <Box className="grid justify-end">
          <Tabs 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example" 
            TabIndicatorProps={{ style: { display: 'none', overflow: 'auto' } }}
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

          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box className="grid sm:grid-cols-2 gap-2.5">
            {WorkList.map((work: any, index: number) => (
              <WorkCard 
                key={index} 
                title={work.title} 
                category={work.category}
                image={work.image}
                href={work.href}
              />
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box className="grid sm:grid-cols-2 gap-2.5">
              {WorkList.map((work: any, index: number) =>{
                if(work.category === 'Web Development'){
                  return (
                    <WorkCard 
                      key={index} 
                      title={work.title}
                      category={work.category} 
                      image={work.image}
                      href={work.href}
                    />
                  )}
                return '';
              })}
            </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box className="grid sm:grid-cols-2 gap-2.5">
            {WorkList.map((work: any, index: number) =>{
              if(work.category === 'Design'){
                return (
                  <WorkCard 
                    key={index} 
                    title={work.title}
                    category={work.category}
                    image={work.image}
                    href={work.href}
                  />
                )}
              return '';
            })}
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
        color: value === index ? '#A084DC' : 'gray',
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