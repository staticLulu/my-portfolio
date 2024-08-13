'use client'

import { Box, Button, IconButton, Typography } from "@mui/material";
import { IconBaseProps } from "react-icons";
import { CiLocationOn } from "react-icons/ci";
import { LuMailOpen } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import { IoHomeOutline, IoLocationOutline } from "react-icons/io5";

const MobileProfileSection = () => {
  const menuList = [
    {
      name: 'Home',
      href: '/#home',
      icon: <IoHomeOutline className="w-[18px] h-auto"/>
    },
    {
      name: 'Resume',
      href: '/#resume',
      icon: <IoHomeOutline className="w-[18px] h-auto"/>
    },
    {
      name: 'Work',
      href: '/#work',
      icon: <IoHomeOutline className="w-[18px] h-auto"/>
    },
    {
      name: 'Contact',
      href: '/#contact',
      icon: <IoHomeOutline className="w-[18px] h-auto"/>
    }
  ];

  const contactList=[
    {
      id: 1,
      title: 'Phone',
      value: '089 614 712',
      icon: <MdPhoneAndroid className="w-[24px] h-auto text-[#C8A1E0]" />
    },
    {
      id: 2,
      title: 'Location',
      value: 'Phnom Penh',
      icon: <IoLocationOutline className="w-[24px] h-auto text-[#C8A1E0]"/>
    },
    {
      id: 3,
      title: 'Email',
      value: 'dang.dangmakara@gmail.com',
      icon: <LuMailOpen className="w-[22px] h-auto text-[#C8A1E0]"/>
    },
  ];

  const socialMediaList=[
    {
      id: 1,
      image:<Image src= "/images/facebook.png" alt="linkedin" width={30} height={30} priority unoptimized/> ,
      href: '/',
    },
    {
      id: 2,
      image:<Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} priority unoptimized/> ,
      href: '/',
    },
    {
      id: 3,
      image:<Image src="/images/telegram.png" alt="linkedin" width={30} height={30} priority unoptimized/> ,
      href: '/',
    },
    {
      id: 4,
      image:<Image src="/images/github.png" alt="linkedin" width={30} height={30} priority unoptimized/> ,
      href: '/',
    },

  ];

  return (
    <Box 
      className="
        bg-white 
        rounded-xl 
        shadow-sm 
        px-4 
        pb-4
        w-full
      " 
    >
      <Box className="grid justify-center">
        <Box className="grid justify-center h-fit">
          <Image 
            src="/images/profile3.jpg" 
            alt="profile" 
            width={150} 
            height={166.56} 
            priority 
            unoptimized 
            className="rounded-[20px] mt-[-80px]"
          />
        </Box>

        <Box className="my-4 text-center h-fit">
          <Typography variant="h5" className="font-semibold">Dang Makara</Typography>
          <Typography variant="subtitle1" className="text-gray-400">Fronted Developer</Typography>
        </Box>

        <Box className="grid gap-1 h-fit xs:grid-cols-2 sm:grid-cols-4 shadow-sm justify-items-center pb-10">
          {socialMediaList.map((item: any, index: number) => (
            <MyComponent key={index} href={item.href} image={item.image} />
          ))}
        </Box>
      </Box>

      <Box className="bg-[#F2F7FC] rounded-xl grid">
        {menuList.map((item: any, index: number) => (
          <MyComponent key={index} href={item.href} name={item.name}/>
        ))}
      </Box>

      <Box className="p-2.5 grid gap-4 bg-[#F2F7FC] border border-gray-200 rounded-xl shadow-sm mt-4">
        {contactList.map((social: any, index: number) => (
          <MediaSection key={index} title={social.title} icon={social.icon} value={social.value}/>
        ))}
        <Button 
          sx={{ 
            background: 'linear-gradient(to right, #E2BFD9, #674188)', 
            color:'white', 
            borderRadius:'30px', 
            textTransform:'capitalize'
          }} 
          size="small"
          startIcon={<GoDownload/>}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  )
}

type TSocialProps = {
  title: string;
  value: any;
  icon: any;
}

const MediaSection = ({title, value, icon}: TSocialProps) => {
  return (
    <Box className="xs:grid sm:flex xs:gap-1 sm:gap-24 items-center sm:border-b sm:border-gray-200 sm:pb-2">
      <Box className="grid xs:justify-center sm:justify-start">
        {icon}
      </Box>
      <Box className="grid xs:justify-center sm:justify-start">
        <Typography className="text-neutral-400 font-medium flex xs:justify-center sm:justify-start">{title}</Typography>
        <Typography className="font-semibold text-xs">{value}</Typography>
      </Box>
  </Box>
  )
}

const MyComponent = ({name, href, image}:{name?:string; href: any; image?: any}) => ( 
  <Link 
    href={href} 
    className={`
      bg-[#F2F7FC] 
      rounded-xl
      flex 
      items-center 
      justify-center
      ${name ? 'hover:bg-[#E2BFD9] p-2' : 'p-4 w-fit'}
      hover:text-white
      hover:shadow-sm
      font-semibold
      text-lg
    `}
  >
    {image}
    {name}
  </Link>
)

export default MobileProfileSection;