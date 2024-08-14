'use client'

import { Box, Button } from "@mui/material";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { FaCode } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";

const AppBar = () => {
  return (
    <Box className="lg:py-5 pb-10 flex items-center justify-between xs:mb-14 dark:bg-slate-800">
      <LuCode2 size={50} className="dark:text-slate-400 dark:opacity-[0.8]"/>
      <Box>
        <ThemeToggle/>
      </Box>
    </Box>
  )
}

export default AppBar;