import { Box, Typography } from "@mui/material";
import MyCard from "../components/MyCard";
import { IoCodeSlash } from "react-icons/io5";
import SectionComponent from "../components/SectionComponent";
import { FaFigma, FaInstagram } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

const HomeComponent = () => {
  const whatIDos = [
    {
      id: 1,
      title: 'Web Development',
      description: <>As a developer, I find myself most 
        captivated by the power and flexibility of 
        NEXT.js. I&apos;m always eager to dive into new
        projects that leverage NEXT.js and 
        discover innovative ways to create fast, 
        scalable, and user-friendly applications.</>,
      icon: <IoCodeSlash className="text-[#A084DC] w-[22px] h-auto"/>
    },
    {
      id: 2,
      title: 'Web Development',
      description: <>
        With a focus on user-centric design and
        cutting-edge technologies, I thrive on 
        building intuitive and efficient apps 
        that make a positive impact on people&apos;s 
        lives. Let&apos;s turn ideas into reality and 
        shape the future together.
      </>,
      icon: <FaInstagram className="text-[#A084DC] w-[22px] h-auto"/>
    },
    {
      id: 3,
      title: 'Web Development',
      description: <>Crafting visually appealing and intuitive user
        interfaces that offer a delightful user 
        experience is something I&apos;m truly fanatic 
        about.</>,
      icon: <FaFigma className="text-[#A084DC] w-[22px] h-auto"/>
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
      icon: <MdOutlineMonitor className="text-[#A084DC] w-[22px] h-auto"/>
    }
  ];

  return (
    <Box className="grid gap-4">
      <Box className="h-[220px]">
        <SectionComponent title="ABOUT ME">
          <Typography className="dark:text-slate-400">
            Hello there! I&apos;m thrilled to welcome you to my portfolio. I am a passionate and versatile
            full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
            My journey in the world of web development has been nothing short of exhilarating, and 
            I constantly strive to enhance my skills and embrace emerging trends in the industry.
          </Typography>
        </SectionComponent>
      </Box>
      <Box className=" grid gap-4">
        <Typography variant="h4" className="font-bold dark:text-slate-200">
          What I Do!
        </Typography>

        <Box className="grid grid-cols-2 gap-4">
          {whatIDos.map((item, index) => (
            <MyCard
              key={index}
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
