'use client'

import { Box, Button, FormControl, FormHelperText, TextField, Typography } from "@mui/material"
import { MdOutlineAttachEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import SectionComponent from "../components/SectionComponent";

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    message: yup.string().optional(),
  })
  .required()

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    reset();
  }

  return (
    <Box className="grid gap-4 p-4">
      <SectionComponent title="Contact">
        <Box className="grid gap-4 md:grid-cols-2">
          <SectionCard 
            title="Phone:" 
            icon={<MdOutlinePhoneInTalk className="w-[20px] h-[20px] text-[#A084DC]"/>} 
          >
            <Typography className="font-medium dark:text-slate-400">+855 896 614 712</Typography>
          </SectionCard>
          <SectionCard 
            title="Email:" 
            icon={<MdOutlineAttachEmail className="w-[20px] h-[20px] text-[#A084DC]"/>} 
          >
            <Typography className="font-medium dark:text-slate-400 xs:text-sm sm:text-base">dang.dangmakara@gmail.com</Typography>
          </SectionCard>
        </Box>
      </SectionComponent>
      <Box 
        className="
          py-4 
          px-10 
          bg-[#F2F7FC] 
          dark:bg-slate-600 
          dark:border 
          dark:border-slate-500 
          rounded-[12px] 
          shadow-sm
        "
      >
        <Typography className="dark:text-slate-200">
          I am always open to discussing new project, opportunities
          in tech world, partnerships, and more so mentorship.
        </Typography>
        <form className="grid gap-5 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <FormControl className="w-full grid gap-2.5">
            <Box>
              <label className="font-semibold dark:text-slate-200">Name:</label>
              <TextField {...register("name")} variant="standard" size="small" fullWidth/>
              <FormHelperText className="text-red-400 m-0">{errors.name?.message}</FormHelperText>
            </Box>
            <Box>
              <label className="font-semibold dark:text-slate-200">Email:</label>
              <TextField {...register("email")}  variant="standard" size="small" fullWidth/>
              <FormHelperText className="text-red-400 m-0">{errors.email?.message}</FormHelperText>
            </Box>
            <Box>
              <label className="font-semibold dark:text-slate-200">Message:</label>
              <TextField {...register("message")}  variant="standard" size="small" fullWidth/>
              <FormHelperText className="text-red-400 m-0">{errors.message?.message}</FormHelperText>
            </Box>
          </FormControl>

          <Box className="flex justify-start">
            <Button 
              variant="outlined" 
              color="inherit" 
              className="rounded-full border border-[#A084DC] capitalize dark:text-slate-200"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

interface MyCardProps {
  backgroundColor?: string;
  title: string;
  children: any;
  icon: any;
}

const SectionCard = ({ title, children, icon }: MyCardProps) => {
  return (
    <Box 
      className="
        p-4 
        rounded-[12px] 
        bg-[#F2F7FC] 
        dark:bg-slate-600 
        dark:border 
        dark:border-slate-500
      "
    >
      <Box className="flex items-center gap-2">
        {icon}
        <Typography className="font-semibold text-[18px] dark:text-slate-200">{title}</Typography>
      </Box>
      <Box className="pl-7">
        {children}
      </Box>
    </Box>
  )
}

export default Contact;