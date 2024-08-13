'use client'

import { Box, Button } from "@mui/material";
import Image from "next/image";

const AppBar = () => {
  return (
    <Box className="lg:py-5 pb-10 flex items-center justify-between xs:mb-14">
      <Image src="/images/logo.png" alt="logo" width={40} height={40} unoptimized priority/>
      <Box>
        <Image src="/images/light.png" alt="light" width={35} height={35} unoptimized priority/>
        {/* <Image src="/images/light.png" alt="light" width={35} height={35} unoptimized priority/> */}
      </Box>
    </Box>
  )
}

export default AppBar;