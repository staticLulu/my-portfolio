"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import SectionComponent from "../SectionComponent";
import WorkCard from "../WorkCard";
import projectList from "@/data/projectList.json";
import MyDialog from '../myDialog';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const Works = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className='p-5 xs:mb-10 md:0' id='work'>
      <SectionComponent title='Portfolio'>
        <Box>
          <Box className='grid justify-end'>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              TabIndicatorProps={{
                style: { display: "none", overflow: "auto" },
              }}
            >
              <TabSection
                label='All'
                value={value}
                index={0}
                handleChange={handleChange}
              />
              <TabSection
                label='Web Development'
                value={value}
                index={1}
                handleChange={handleChange}
              />
              <TabSection
                label='Design'
                value={value}
                index={2}
                handleChange={handleChange}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box className='grid sm:grid-cols-2 gap-2.5'>
              {projectList.map((work: any, index: number) => {
                return (
                    <WorkCard
                      key={index}
                      title={work.title}
                      category={work.category}
                      image={work.image}
                      href={work.href}
                      onClick={() => setOpen(true)}
                    />
                  )
                })}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box className='grid sm:grid-cols-2 gap-2.5'>
              {projectList.map((work: any, index: number) => {
                if (work.category === "Web Development") {
                  return (
                    <WorkCard
                      key={index}
                      title={work.title}
                      category={work.category}
                      image={work.image}
                      href={work.href}
                      onClick={() => setOpen(true)}
                    />
                  );
                }
                return "";
              })}
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box className='grid sm:grid-cols-2 gap-2.5'>
              {projectList.map((work: any, index: number) => {
                if (work.category === "Design") {
                  return (
                    <WorkCard
                      key={index}
                      title={work.title}
                      category={work.category}
                      image={work.image}
                      href={work.href}
                    />
                  );
                }
                return "";
              })}
            </Box>
          </CustomTabPanel>
        </Box>
      </SectionComponent>
    </Box>
  );
};

const TabSection = ({ label, value, index, handleChange }: any) => {
  return (
    <Tab
      label={label}
      sx={{
        color: value === index ? "#A084DC" : "gray",
        boxShadow: "sm",
        textTransform: "capitalize",
        fontSize: "16px",
        fontWeight: 600,
      }}
      onClick={(event: MouseEventHandler<HTMLDivElement> | any) =>
        handleChange(event, index)
      }
    />
  );
};

export default Works;
