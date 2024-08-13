'use client'

import { Box, Button, FormControl, FormHelperText, FormLabel, TextField, Typography } from "@mui/material"
import SectionComponent from "./SectionComponent";
import { MdOutlineAttachEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <Box className="grid gap-4">
      <SectionComponent title="Contact">
        <Box className="grid gap-4 grid-cols-2">
          <SectionCard 
            title="Phone:" 
            icon={<MdOutlinePhoneInTalk className="w-[20px] h-[20px] text-[#C8A1E0]"/>} 
            children={<><Typography className="font-medium">+855 896 614 712</Typography></>}
            backgroundColor="#F2F7FC" 
          />
          <SectionCard 
            title="Email:" 
            icon={<MdOutlineAttachEmail className="w-[20px] h-[20px] text-[#C8A1E0]"/>} 
            children={<><Typography className="font-medium">dang.dangmakara@gmail.com</Typography></>}
            backgroundColor="#F2F7FC" 
          />
        </Box>
      </SectionComponent>
      <Box className="py-4 px-10 bg-[#F2F7FC] rounded-[12px] shadow-sm">
        <Typography>
          I am always open to discussing new project, opportunities
          in tech world, partnerships, and more so mentorship.
        </Typography>
        <form className="grid gap-4 mt-5" onSubmit={handleSubmit(onSubmit)}>
          <FormControl className="w-full grid gap-4">
            <Box>
              <label className="font-semibold">Name:</label>
              <TextField {...register("name")} variant="standard" size="small" fullWidth/>
              <FormHelperText className="text-red-400 m-0">{errors.name?.message}</FormHelperText>
            </Box>
            <Box>
              <label className="font-semibold">Email:</label>
              <TextField {...register("email")}  variant="standard" size="small" fullWidth/>
              <FormHelperText className="text-red-400 m-0">{errors.email?.message}</FormHelperText>
            </Box>
            <Box>
              <label className="font-semibold">Message:</label>
              <TextField {...register("message")}  variant="standard" size="small" fullWidth/>
              <FormHelperText className="text-red-400 m-0">{errors.message?.message}</FormHelperText>
            </Box>
          </FormControl>

          <Box className="flex justify-start">
            <Button 
              variant="outlined" 
              color="inherit" 
              className="rounded-full border border-[#674188] capitalize"
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

const SectionCard = ({ backgroundColor, title, children, icon }: MyCardProps) => {
  return (
    <Box className="p-4 rounded-[12px]"  sx={{ backgroundColor: backgroundColor, }}>
      <Box className="flex items-center gap-2">
        {icon}
        <Typography className="font-semibold text-[18px]">{title}</Typography>
      </Box>
      <Box className="pl-7">
        {children}
      </Box>
    </Box>
  )
}

export default Contact;