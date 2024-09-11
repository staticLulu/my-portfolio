"use client";

import { Box, Typography } from "@mui/material";
import SectionComponent from "../SectionComponent";
import MyCard from "../MyCard";
import whatIDoList from "@/data/whatIDoList.json";
import { WhatIDoIconMapping } from '@/app/lib/iconMapping';

const HomeComponent = () => {
  return (
    <Box className='grid gap-4 p-5 xs:mb-10 md:mb-0' id='home'>
      <Box className='h-full'>
        <SectionComponent title='ABOUT ME'>
          <Typography className='dark:text-slate-400'>
            I am Dang Makara, a passionate frontend developer with a solid foundation in
            React.js, Next.js, and modern web technologies. While I am still building my
            expertise, I have successfully delivered projects using responsive design, user-
            centered interfaces, and JavaScript frameworks. I&apos;m always eager to learn,
            adapt, and improve my skills, with a focus on creating clean, maintainable code.
            I thrive in collaborative environments and enjoy solving complex problems to
            deliver high-quality user experiences.
          </Typography>
        </SectionComponent>
      </Box>
      <Box className='grid gap-4'>
        <Typography variant='h4' className='font-bold dark:text-slate-200'>
          What I Do!
        </Typography>

        <Box className='grid md:grid-cols-2 gap-4'>
          {whatIDoList.map((item, index) => {
            const IconComponent = WhatIDoIconMapping[item.icon];
            return (
              <MyCard
                key={index}
                title={item.title}
                description={item.description}
                icon={<IconComponent size={26} className="text-iconColor" />}
              />
            )
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComponent;
