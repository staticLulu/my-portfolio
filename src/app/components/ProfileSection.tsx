'use client'

import { Box, Button, Typography } from "@mui/material";
import { LuMailOpen } from "react-icons/lu";
import { MdPhoneAndroid } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const ProfileSection = () => {
  const socialList=[
    {
      id: 1,
      title: 'Phone',
      value: '089 614 712',
      icon: <MdPhoneAndroid className="w-[24px] h-auto text-[#A084DC]" />
    },
    {
      id: 2,
      title: 'Email',
      value: 'dang.dangmakara@gmail.com',
      icon: <LuMailOpen className="w-[22px] h-auto text-[#A084DC]"/>
    },
    {
      id: 3,
      title: 'Location',
      value: 'Phnom Penh',
      icon: <IoLocationOutline className="w-[24px] h-auto text-[#A084DC]"/>
    }
  ];

  const socialMediaStyle = `{
    bg-[#F2F7FC] 
    dark:bg-slate-600
    p-4 
    shadow-sm
    rounded-xl
  }`
  return (
    <Box 
      className="
        bg-white 
        dark:bg-slate-700
        rounded-xl 
        shadow-sm 
        gap-4 
        px-4 
        pb-4
        md:h-[800px]
        grid
        grid-rows-2
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
        <Box className="xs:mt-4 md:mt-[10px] text-center h-fit">
          <Typography variant="h5" className="font-semibold dark:text-slate-200">Dang Makara</Typography>
          <Typography variant="subtitle1" className="text-slate-400">Fronted Developer</Typography>
        </Box>
        <Box className="grid xs:grid-cols-2 lg:grid-cols-4 gap-4 h-fit shadow-sm pt-5">
          <Link target="_blank" href={'/'} className={socialMediaStyle}>
            <Image src="/images/facebook.png" alt="facebook" width={30} height={30} priority unoptimized/>
          </Link>
          <Link target="_blank" href={'/'}  className={socialMediaStyle}>
            <Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} priority unoptimized/>
          </Link>
          <Link target="_blank" href={'/'}  className={socialMediaStyle}>
            <Image src="/images/telegram.png" alt="telegram" width={30} height={30} priority unoptimized/>
          </Link>
          <Link target="_blank" href={'https://github.com/staticLulu'} className={socialMediaStyle}>
            <Image src="/images/github.png" alt="github" width={30} height={30} priority unoptimized/>
          </Link>
        </Box>
      </Box>
      <Box 
        className="
          xs:p-2
          sm:p-5 
          grid 
          gap-4 
          bg-[#F2F7FC] 
          dark:bg-slate-600 
          border 
          border-gray-200 
          dark:border-slate-500
          rounded-xl 
          shadow-sm
          grid-cols-1
          items-center
        "
      >
        {socialList.map((social: any, index: number) => (
          <MediaSection 
            key={index} 
            title={social.title} 
            icon={social.icon} 
            value={social.value}
          />
        ))}
        <Button 
          sx={{ 
            background: 'linear-gradient(to right, #BFACE2, #645CBB)' , 
            color:'white', 
            borderRadius:'20px', 
            textTransform:'capitalize'
          }} 
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
    <Box 
      className="
        xs:grid 
        lg:flex 
        items-center
        xs:gap-4 
        xl:gap-8 
        sm:border-b 
        sm:border-slate-200 
        dark:border-slate-500 
        pb-2.5
      "
    >
      <Box className="flex justify-center">
        {icon}
      </Box>
      <Box>
        <Typography 
          className="
            text-neutral-400 
            font-medium 
            dark:text-slate-400 
            xs:text-center
            lg:text-left
          "
        >
          {title}
        </Typography>
        <Typography 
          className="
            font-semibold 
            xs:text-xs
            xl:text-sm
            dark:text-slate-200 
            text-center
          "
        >
          {value}
        </Typography>
      </Box>
  </Box>
  )
}

export default ProfileSection;