'use client'

import { Box, Divider, Typography } from "@mui/material";
import MyCard from "./MyCard";
import { IoCodeSlash } from "react-icons/io5";
import SectionComponent from "./SectionComponent";
import { FaFigma, FaInstagram } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const HomeComponent = () => {
  const whatIDos = [
    {
      id: 1,
      title: 'Web Development',
      description: <>As a developer, I find myself most 
        captivated by the power and flexibility of 
        NEXT.js. I'm always eager to dive into new
        projects that leverage NEXT.js and 
        discover innovative ways to create fast, 
        scalable, and user-friendly applications.</>,
      icon: <IoCodeSlash className="text-[#C8A1E0] w-[22px] h-auto"/>
    },
    {
      id: 2,
      title: 'Web Development',
      description: <>
        With a focus on user-centric design and
        cutting-edge technologies, I thrive on 
        building intuitive and efficient apps 
        that make a positive impact on people's 
        lives. Let's turn ideas into reality and 
        shape the future together.
      </>,
      icon: <FaInstagram className="text-[#C8A1E0] w-[22px] h-auto"/>
    },
    {
      id: 3,
      title: 'Web Development',
      description: <>Crafting visually appealing and intuitive user
        interfaces that offer a delightful user 
        experience is something I'm truly fanatic 
        about.</>,
      icon: <FaFigma className="text-[#C8A1E0] w-[22px] h-auto"/>
    },
    {
      id: 4,
      title: 'Web Development',
      description: <>
        I have also found great joy in sharing my 
        knowledge with others. Being a technical 
        mentor allows me to give back to the 
        community that has supported me 
        throughout my career. </>,
      icon: <MdOutlineMonitor className="text-[#C8A1E0] w-[22px] h-auto"/>
    }
  ];

  return (
    <Box className="grid gap-4">
      <SectionComponent title="ABOUT ME">
        <Typography>
          Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
          full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
          My journey in the world of web development has been nothing short of exhilarating, and 
          I constantly strive to enhance my skills and embrace emerging trends in the industry.
        </Typography>
      </SectionComponent>
      <Box className=" grid gap-4">
        <Typography variant="h4" className="font-bold">
          What I Do!
        </Typography>

        <Box className="grid grid-cols-2 gap-4">
          {whatIDos.map((item, index) => (
            <MyCard
              key={item.id}
              backgroundColor={'#F2F7FC'}
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
