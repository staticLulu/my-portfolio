"use client";

import { Avatar, Box, Drawer, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { MdOutlineMenu } from "react-icons/md";
import { ElementType, useEffect, useState } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { Link as _ReactScrollLink, scroller } from "react-scroll";
import appBarItems from "@/data/appBarItems.json";
import { AppBarIconMapping } from '../lib/iconMapping';

const ReactScrollLink = _ReactScrollLink as ElementType;

const AppBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenuClick = (href: string) => {
    const targetId = href.startsWith("#") ? href.substring(1) : null;
    if (targetId && pathname === "/") {
      handleScrollTo(targetId);
    } else {
      router.push(href);
    }
    setOpen(false); 
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        handleScrollTo(hash.substring(1)); 
      }
    }
  }, [pathname]);

  const DrawerList = (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      className='w-[250px] bg-[#F2F7FC] dark:bg-slate-700 h-full'
    >
      {appBarItems.map((item: any, index: number) => {
        const IconComponent = AppBarIconMapping[item.icon];
        return (
          <Box key={index} className="py-3 cursor-pointer">
            {pathname === "/" && item.href.startsWith("#") ? (
              // Use ScrollLink for internal scroll items
              <ReactScrollLink
                to={item.href.substring(1)} // Remove '#' and pass the ID to react-scroll
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)} // Close the drawer on scroll
              >
                <Box
                  className={`
                    flex 
                    items-center 
                    gap-3 
                    py-4 
                    px-8 
                    ${item.title === "Profile"
                      ? "border-b dark:bg-slate-600 dark:border-b-slate-500 border-b-slate-200 shadow-sm"
                      : "border-none"
                    }`}
                >
                  {item.title === "Profile" ? (
                    <Avatar
                      alt='profile'
                      src={"/images/profile3.jpg"}
                      sx={{ width: 50, height: 50 }}
                      className='border border-[#79AC78]'
                    />
                  ) : (
                    <IconComponent size={26} className="text-iconColor" />
                  )}
                  <Typography className='text-xl font-semibold dark:text-slate-400'>
                    {item.title}
                  </Typography>
                </Box>
              </ReactScrollLink>
            ) : (
              // Use regular click for external or non-scroll items
              <Box
                onClick={() => handleMenuClick(item.href)}
                className={`
                  flex 
                  items-center 
                  gap-3 
                  py-4 
                  px-8 
                  ${item.title === "Profile"
                    ? "border-b dark:bg-slate-600 dark:border-b-slate-500 border-b-slate-200 shadow-sm"
                    : "border-none"
                  }`}
              >
                {item.title === "Profile" ? (
                  <Avatar
                    alt='profile'
                    src={"/images/profile3.jpg"}
                    sx={{ width: 50, height: 50 }}
                    className='border border-[#79AC78]'
                  />
                ) : (
                  <IconComponent size={26} className="text-iconColor" />
                )}
                <Typography className='text-xl font-semibold dark:text-slate-400'>
                  {item.title}
                </Typography>
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );

  return (
    <Box
      className='
        max-w-screen-xl
        mx-auto
        flex 
        items-center
        justify-between
        h-20
        p-4
      '
    >
      {/* <LuCodeXml size={50} className='dark:text-white cursor-pointer' onClick={() => router.push('/')} /> */}
      <Typography className='dark:text-white cursor-pointer text-3xl font-semibold'>DangMakara</Typography>
      <Box className="flex items-center gap-4">
        <MdOutlineMenu 
          size={40} 
          className='dark:text-white text-black cursor-pointer md:hidden' 
          onClick={toggleDrawer(true)} 
        />
        <ThemeToggle />
      </Box> 
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default AppBar;
