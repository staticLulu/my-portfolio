'use client'

import { Box, Button, IconButton, Typography } from "@mui/material";
import { IconBaseProps } from "react-icons";
import { CiLocationOn } from "react-icons/ci";
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
      icon: <MdPhoneAndroid className="w-[24px] h-auto text-[#C8A1E0]" />
    },
    {
      id: 2,
      title: 'Email',
      value: 'dang.dangmakara@gmail.com',
      icon: <LuMailOpen className="w-[22px] h-auto text-[#C8A1E0]"/>
    },
    {
      id: 3,
      title: 'Location',
      value: 'Sangkat Toul Sangkae Ti Pir, Khan Russey Keo, Phnom Penh',
      icon: <IoLocationOutline className="w-[24px] h-auto text-[#C8A1E0]"/>
    }
  ];

  const socialMediaStyle = `{
    bg-[#F2F7FC] 
    p-4 
    shadow-sm
  }`
  return (
    <Box 
      className="
        bg-white 
        rounded-xl 
        shadow-sm 
        grid 
        grid-rows-2 
        gap-4 
        px-4 
        pb-4
        md:h-[700px]
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
        <Box className="mt-[-40px] text-center h-fit">
          <Typography variant="h5" className="font-semibold">Dang Makara</Typography>
          <Typography variant="subtitle1" className="text-gray-400">Fronted Developer</Typography>
        </Box>
        <Box className="flex gap-4 h-fit shadow-sm">
          <Link href={'/'} className={socialMediaStyle}>
            <Image src="/images/facebook.png" alt="facebook" width={30} height={30} priority unoptimized/>
          </Link>
          <Link href={'/'}  className={socialMediaStyle}>
            <Image src="/images/linkedin.png" alt="linkedin" width={30} height={30} priority unoptimized/>
          </Link>
          <Link href={'/'}  className={socialMediaStyle}>
            <Image src="/images/telegram.png" alt="telegram" width={30} height={30} priority unoptimized/>
          </Link>
          <Link href={'/'} className={socialMediaStyle}>
            <Image src="/images/github.png" alt="github" width={30} height={30} priority unoptimized/>
          </Link>
        </Box>
      </Box>
      <Box className="p-5 grid gap-4 bg-[#F2F7FC] border border-gray-200 rounded-xl shadow-sm">
        {socialList.map((social: any, index: number) => (
          <MediaSection key={index} title={social.title} icon={social.icon} value={social.value}/>
        ))}
        <Button 
          sx={{ 
            background: 'linear-gradient(to right, #E2BFD9, #674188)', 
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
    <Box className="flex items-center gap-8 border-b border-gray-200 pb-2.5">
      <Box>
        {icon}
      </Box>
      <Box>
        <Typography className="text-neutral-400 font-medium">{title}</Typography>
        <Typography className="font-semibold text-sm">{value}</Typography>
      </Box>
  </Box>
  )
}

export default ProfileSection;