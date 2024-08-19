'use client'

import { Box, Typography } from "@mui/material"
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import SectionComponent from "./SectionComponent";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  const myEducations = [
    {
      id: 1,
      position: 'Computer Science & Engineering',
      companyName: "Studied Computer Science & Engineering at Royal University of Phnom Penh(RUPP)",
      date:'2019-2023'
    },
    {
      id: 2,
      position: 'High school',
      companyName: "Studied at Tameang high school",
      date:'2013-2019'
    },
  ];

  const myExperiences = [
    {
      id: 1,
      position: 'IntechDev Innovation',
      companyName: " To be a staff at IntechDev Innovation Position Frontend Web Developer.",
      date:'(May-16-2022) - (Present)'
    },
    {
      id: 2,
      position: 'Modernize Tech Insight',
      companyName: "Internship and pass to be a staff at Modernize Tech Insight position Web development.",
      date:'(September-2021) - (May-13-2022)'
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
      title: 'Sass',
    },
    {
      id: 9,
      title: 'Axios',
    },
    {
      id: 10,
      title: 'Axios',
    },
    {
      id: 11,
      title: 'Git',
    },
  ];

  const mySoftSkills = [
    {
      id: 1,
      title: 'Research',
    },
    {
      id: 2,
      title: 'flexibility',
    },
    {
      id: 3,
      title: 'Work in team',
    },
    {
      id: 4,
      title: 'Impeccable Communication',
    },
    {
      id: 5,
      title: 'High Commitment',
    },
    {
      id: 6,
      title: 'Respect rules of company',
    },
    {
      id: 7,
      title: 'Time Management',
    },
    
  ];

  return (
    <Box>
      <SectionComponent title="Resume">
        <Box className="grid grid-cols-2 gap-4 mt-4">
          <Box className="grid gap-5">
            <Box className="flex gap-2.5 items-center">
              <PiGraduationCap className="w-[24px] h-auto text-[#A084DC]"/>
              <Typography variant="h5" className="font-semibold dark:text-slate-200">Education</Typography>
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
              <MdOutlineWorkOutline className="w-[24px] h-auto text-[#A084DC]"/>
              <Typography variant="h5" className="font-semibold dark:text-slate-200">Experience</Typography>
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
              {/* <PiGraduationCap className="w-[24px] h-auto text-[#A084DC]"/> */}
              <Typography variant="h5" className="font-semibold dark:text-slate-200">Work skills</Typography>
            </Box>
            <Box className="grid md:grid-cols-2 xl:grid-cols-3 gap-2.5">
              {myWorkSkills.map((work: any, index: number) => (
                <Box 
                  className="
                    bg-[#F2F7FC] 
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
                  " 
                  key={index}
                >
                  {work.title}
                </Box>
              ))}
            </Box>
          </Box>

          <Box className="grid gap-5">
            <Box className="flex items-center gap-2.5">
              {/* <PiGraduationCap className="w-[24px] h-auto text-[#A084DC]"/> */}
              <Typography variant="h5" className="font-semibold dark:text-slate-200">Soft skills</Typography>
            </Box>
            <Box className="grid md:grid-cols-1 xl:grid-cols-2 gap-2.5">
              {mySoftSkills.map((skill: any, index: number) => (
                <Box 
                  className="
                    bg-[#F2F7FC] 
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
                  " 
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