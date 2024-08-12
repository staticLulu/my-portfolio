'use client'

import { Box, Button, Typography } from "@mui/material"
import SectionComponent from "./SectionComponent";
import MyCard from "./MyCard";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";

const Resume = () => {
  const myEducations = [
    {
      id: 1,
      title: 'Education',
      description: "hello world?",
      icon: <PiGraduationCap className="w-[24px] h-auto text-orange-500"/>
    },
    {
      id: 2,
      title: 'Education',
      description: "hello world?",
      icon: <PiGraduationCap className="w-[24px] h-auto text-orange-500"/>
    },
  ];

  const myExperiences = [
    {
      id: 1,
      title: 'Education',
      description: "hello world?",
      icon: <MdOutlineWorkOutline className="w-[24px] h-auto text-orange-500"/>
    },
    {
      id: 2,
      title: 'Education',
      description: "hello world?",
      icon: <PiGraduationCap className="w-[24px] h-auto text-orange-500"/>
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
      title: 'MentorShip',
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
  ];

  return (
    <SectionComponent title="Resume">
      <Box className="grid grid-cols-2 gap-10 mt-4">
        <Box className="grid gap-5">
          <Box className="flex gap-2.5">
            <PiGraduationCap className="w-[24px] h-auto text-orange-500"/>
            <Typography variant="h5" className="font-semibold">Education</Typography>
          </Box>
          {myEducations.map((target: any, index: number) => (
            <MyCard 
              key={index}
              title={target.title} 
              icon={target.icon} 
              backgroundColor={'#FFEBD1'}
              description={target.description}
            />
          ))}
        </Box>

        <Box className="grid gap-5">
          <Box className="flex gap-2.5">
            <MdOutlineWorkOutline className="w-[24px] h-auto text-orange-500"/>
            <Typography variant="h5" className="font-semibold">Experience</Typography>
          </Box>
          
            {myExperiences.map((target: any, index: number) => (
              <MyCard 
                key={index}
                title={target.title} 
                icon={target.icon} 
                backgroundColor={'#FFEBD1'}
                description={target.description}
              />
            ))}
        </Box>
        
        <Box className="grid gap-5">
          <Box className="flex gap-2.5">
            <PiGraduationCap className="w-[24px] h-auto text-orange-500"/>
            <Typography variant="h5" className="font-semibold">Work skills</Typography>
          </Box>
          <Box className="grid grid-cols-3 gap-2.5">
            {myWorkSkills.map((work: any, index: number) => (
              <Box 
                className="bg-[#E1E8EF] shadow-sm h-fit text-center p-1.5 rounded-[16px]" 
                key={index}
              >
                {work.title}
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="grid gap-2.5">
          <Box className="flex items-center gap-2.5">
            <PiGraduationCap className="w-[24px] h-auto text-orange-500"/>
            <Typography variant="h5" className="font-semibold">Soft skills</Typography>
          </Box>
          <Box className="grid grid-cols-3 gap-2.5">
            {mySoftSkills.map((skill: any, index: number) => (
              <Box 
                className="bg-[#E1E8EF] shadow-sm h-fit text-center p-1.5 rounded-[16px]" 
                key={index}
              >
                {skill.title}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </SectionComponent>
  )
}

export default Resume;