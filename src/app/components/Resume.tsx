'use client'

import { Box, Button, Typography } from "@mui/material"
import SectionComponent from "./SectionComponent";
import MyCard from "./MyCard";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  const myEducations = [
    {
      id: 1,
      position: 'Education',
      companyName: "hello world?",
      date:'2021-2022'
    },
    {
      id: 2,
      position: 'Education',
      companyName: "hello world?",
      date:'2021-2022'
    },
  ];

  const myExperiences = [
    {
      id: 1,
      position: 'Education',
      companyName: "hello world?",
      date:'2021-2022'
    },
    {
      id: 2,
      position: 'Education',
      companyName: "hello world?",
      date:'2021-2022'
    },
  ];

  const myWorkSkills = [
    {
      id: 1,
      title: 'NEXT.js',
    },
    {
      id: 2,
      title: 'React.js',
    },
    {
      id: 3,
      title: 'HTML5',
    },
    {
      id: 4,
      title: 'CSS',
    },
    {
      id: 5,
      title: 'Tailwind CSS',
    },
    {
      id: 5,
      title: 'Figma',
    },
    {
      id: 6,
      title: 'JavaScript',
    },
    {
      id: 7,
      title: 'TypeScript',
    },
    {
      id: 8,
      title: 'Git',
    },
  ];

  const mySoftSkills = [
    {
      id: 1,
      title: 'Time Management',
    },
    {
      id: 2,
      title: 'Impeccable Communication',
    },
    {
      id: 3,
      title: 'High Commitment',
    },
    {
      id: 4,
      title: 'flexibility',
    },
    {
      id: 5,
      title: 'Research',
    },
    {
      id: 6,
      title: 'Writing',
    },
    {
      id: 7,
      title: 'Mentorship',
    },
  ];

  return (
    <Box id="resume">
      <SectionComponent title="Resume">
        <Box className="grid grid-cols-2 gap-4 mt-4">
          <Box className="grid gap-5">
            <Box className="flex gap-2.5">
              <PiGraduationCap className="w-[24px] h-auto text-[#C8A1E0]"/>
              <Typography variant="h5" className="font-semibold">Education</Typography>
            </Box>
            {myEducations.map((target: any, index: number) => (
              <ResumeCard 
                key={index}
                date={target.date}
                position={target.position} 
                company={target.companyName}
              />
            ))}
          </Box>

          <Box className="grid gap-5">
            <Box className="flex gap-2.5">
              <MdOutlineWorkOutline className="w-[24px] h-auto text-[#C8A1E0]"/>
              <Typography variant="h5" className="font-semibold">Experience</Typography>
            </Box>
            
              {myExperiences.map((target: any, index: number) => (
                <ResumeCard 
                  key={index}
                  date={target.date}
                  position={target.position} 
                  company={target.companyName}
                />
              ))}
          </Box>
          
          <Box className="grid gap-5">
            <Box className="flex gap-2.5 items-center">
              <PiGraduationCap className="w-[24px] h-auto text-[#C8A1E0]"/>
              <Typography variant="h5" className="font-semibold">Work skills</Typography>
            </Box>
            <Box className="grid grid-cols-3 gap-2.5">
              {myWorkSkills.map((work: any, index: number) => (
                <Box 
                  className="bg-[#F2F7FC] shadow-sm h-fit text-center p-1.5 rounded-[16px] text-sm" 
                  key={index}
                >
                  {work.title}
                </Box>
              ))}
            </Box>
          </Box>

          <Box className="grid gap-2.5">
            <Box className="flex items-center gap-2.5">
              <PiGraduationCap className="w-[24px] h-auto text-[#C8A1E0]"/>
              <Typography variant="h5" className="font-semibold">Soft skills</Typography>
            </Box>
            <Box className="grid grid-cols-3 gap-2.5">
              {mySoftSkills.map((skill: any, index: number) => (
                <Box 
                  className="bg-[#F2F7FC] shadow-sm h-fit text-center p-1.5 rounded-[16px] text-sm" 
                  key={index}
                >
                  {skill.title}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </SectionComponent>
    </Box>
  )
}

export default Resume;