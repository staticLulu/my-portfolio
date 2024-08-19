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
        <LuCode2 size={50} className="dark:text-slate-200 dark:opacity-[0.8] flex"/>  
      <Box>
        <ThemeToggle/>
      </Box>
    </Box>
  )
}

export default AppBar;
