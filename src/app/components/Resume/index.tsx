"use client";

import { Box, Typography } from "@mui/material";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import SectionComponent from "@/app/components/SectionComponent";
import ResumeCard from "@/app/components/ResumeCard";
import softSkills from '@/data/softSkills.json';
import educationList from "@/data/educationList.json";
import workSkills from "@/data/workSkills.json";
import experienceList from "@/data/experienceList.json";

const Resume = () => {
  const skillProps = `{
    bg-cardBG
    dark:bg-slate-600 
    dark:border 
    dark:border-slate-500 
    dark:text-slate-200
    shadow-sm 
    h-fit 
    text-center 
    p-1.5 
    rounded-[16px] 
    text-sm
  }`
  return (
    <Box className='p-5 xs:mb-10 md:mb-0' id='resume'>
      <SectionComponent title='Resume'>
        <Box className='grid md:grid-cols-2 gap-4 mt-4 items-start'>
          <Box className='grid gap-5'>
            <Box className='flex gap-2.5 items-center'>
              <PiGraduationCap className='w-[24px] h-auto text-iconColor' />
              <Typography
                variant='h5'
                className='font-semibold dark:text-slate-200'
              >
                Education
              </Typography>
            </Box>
            {educationList.map((target: any, index: number) => (
              <ResumeCard
                key={index}
                date={target.date}
                position={target.position}
                company={target.companyName}
              />
            ))}
          </Box>

          <Box className='grid gap-5'>
            <Box className='flex gap-2.5'>
              <MdOutlineWorkOutline className='w-[24px] h-auto text-iconColor' />
              <Typography
                variant='h5'
                className='font-semibold dark:text-slate-200'
              >
                Experience
              </Typography>
            </Box>
            {experienceList.map((target: any, index: number) => (
              <ResumeCard
                key={index}
                date={target.date}
                position={target.position}
                company={target.companyName}
              />
            ))}
          </Box>

          <Box className='grid gap-5'>
            <Box className='flex gap-2.5 items-center'>
              <Typography
                variant='h5'
                className='font-semibold dark:text-slate-200'
              >
                Work skills
              </Typography>
            </Box>
            <Box className='grid xl:grid-cols-3 gap-2.5'>
              {workSkills.map((work: any, index: number) => (
                <Box className={skillProps} key={index} >{work.title} </Box>
              ))}
            </Box>
          </Box>

          <Box className='grid gap-5'>
            <Box className='flex items-center gap-2.5'>
              <Typography
                variant='h5'
                className='font-semibold dark:text-slate-200'
              >
                Soft skills
              </Typography>
            </Box>
            <Box className='grid lg:grid-cols-2 gap-2.5'>
              {softSkills.map((skill: any, index: number) => (
                <Box className={skillProps} key={index}> {skill.title} </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </SectionComponent>
    </Box>
  );
};

export default Resume;
