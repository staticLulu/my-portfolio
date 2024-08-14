'use client'

import { Box, Divider, Typography } from "@mui/material"

const SectionComponent = ({title, children}:{title: string; children: any;}) => {
  return (
    <Box className="h-[180px] grid gap-2.5">
      <Box className="flex items-center gap-8">
        <Typography variant="h4" className="font-bold">
          {title}
        </Typography>
        <Divider  
          sx={{
            height: '2.5px',
            background: 'linear-gradient(to right, #BFACE2, #645CBB)',
            borderRadius: '16px',
            width: {xs: '250px'},
          }}
        />
      </Box>
      {children}
    </Box>
  )
}

export default SectionComponent