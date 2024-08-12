'use client'

import { Box, Button } from "@mui/material";
import Image from "next/image";

const AppBar = () => {
  return (
    <Box className="py-5 mb-10 w-[1280px] m-auto flex items-center justify-between">
      <Image src="/images/logo.png" alt="logo" width={40} height={40} unoptimized priority/>
      <Box>
        <Image src="/images/light.png" alt="light" width={35} height={35} unoptimized priority/>
        {/* <Image src="/images/light.png" alt="light" width={35} height={35} unoptimized priority/> */}
      </Box>
    </Box>
  )
}

export default AppBar;