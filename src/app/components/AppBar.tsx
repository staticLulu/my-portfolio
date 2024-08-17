'use client'

import { 
  Box, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  Toolbar, 
  Typography
} from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineMenu, MdOutlineWorkOutline } from "react-icons/md";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { RiContactsBook3Line } from "react-icons/ri";
import Link from "next/link";
import { PiUserCircle } from "react-icons/pi";

const AppBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const items = [
    {
      id: 1,
      href: '/',
      title: 'Profile',
      icon: <PiUserCircle size={24} className="dark:text-slate-400" />
    },
    {
      id: 2,
      href: '/home',
      title: 'Home',
      icon: <IoHomeOutline size={24} className="dark:text-slate-400" />
    },
    {
      id: 3,
      href: '/resume',
      title: 'Resume',
      icon: <CgNotes size={24} className="dark:text-slate-400" />
    },
    {
      id: 4,
      href: '/work',
      title: 'Work',
      icon: <MdOutlineWorkOutline size={24} className="dark:text-slate-400" />
    },
    {
      id: 5,
      href: '/contact',
      title: 'Contact',
      icon: <RiContactsBook3Line size={24} className="dark:text-slate-400" />
    }
  ];

  const DrawerList = (
    <Box 
      role="presentation" 
      onClick={toggleDrawer(false)} 
      className="w-[calc(100vw-4rem)] bg-[#F2F7FC] dark:bg-slate-700 h-full"
    >
      <List className="pl-8">
        {items.map((item, index) => (
          <Link 
            key={index} 
            href={item.href}
            className='
              px-6 
              py-3 
              cursor-pointer 
            '
          >
            <Box className='flex items-center gap-8 p-2'>
              {item.icon}
              <Typography className="font-semibold dark:text-slate-400">{item.title}</Typography>
            </Box>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box 
      className="
        lg:py-5 
        pb-10 
        flex 
        items-center 
        xs:mb-14 
        justify-between 
        dark:bg-slate-800
      ">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          className="mr-2 md:hidden dark:text-slate-200 dark:opacity-[0.8]"
        >
          <MdOutlineMenu size={30}/>
        </IconButton>
        <LuCode2 size={50} className="dark:text-slate-200 dark:opacity-[0.8] xs:hidden md:flex"/>  
      </Toolbar>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Box>
        <ThemeToggle/>
      </Box>
    </Box>
  )
}

export default AppBar;
