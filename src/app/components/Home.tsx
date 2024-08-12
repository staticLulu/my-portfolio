'use client'

import { Box, Divider, Typography } from "@mui/material";
import MyCard from "./MyCard";
import { IoCodeSlash } from "react-icons/io5";
import SectionComponent from "./SectionComponent";

const HomeComponent = () => {
  const whatIDos = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Dang leverages modern frameworks and libraries to build seamless, high-performance experiences. Their expertise in developing intuitive interfaces and handling complex state management ensures robust and scalable solutions.',
      icon: <IoCodeSlash className="text-orange-500 w-[22px] h-auto"/>
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Dang Makara is a skilled frontend developer specializing in React.js and Next.js. modern frameworks and libraries to build seamless, high-performance experiences.',
      icon: <IoCodeSlash className="text-orange-500 w-[22px] h-auto"/>
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Dang Makara is a skilled frontend developer specializing in React.js and Next.js. With a strong focus on creating dynamic and user-centric web applications, Dang leverages modern frameworks and libraries to build seamless',
      icon: <IoCodeSlash className="text-orange-500 w-[22px] h-auto"/>
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'As a hello world?',
      icon: <IoCodeSlash className="text-orange-500 w-[22px] h-auto"/>
    }
  ];

  const cardColors = ['#FFEBD1', '#F2F7FC'];

  return (
    <Box className="grid gap-4">
      <SectionComponent title="ABOUT ME">
        <Typography>
          As a frontend developer specializing in React.js and Next.js, 
          I focus on creating dynamic and high-performance web applications. 
          I combine a strong attention to detail with a commitment to best practices, 
          crafting intuitive user interfaces that deliver seamless, responsive experiences. 
          My skills in React.js and Next.js help me build scalable applications and enhance 
          performance through server-side rendering and static site generation.
        </Typography>
      </SectionComponent>
      <Box className="py-4 grid gap-4">
        <Typography variant="h4" className="font-bold">
          What I Do!
        </Typography>

        <Box className="grid grid-cols-2 gap-4">
          {whatIDos.map((item, index) => (
            <MyCard
              key={item.id}
              backgroundColor={cardColors[index % cardColors.length]}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComponent;
