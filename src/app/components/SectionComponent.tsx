'use client'

import { Box, Divider, Typography } from "@mui/material"

const SectionComponent = ({title, children}:{title: string; children: any;}) => {
  return (
    <Box className="grid gap-4">
      <Box className="sm:flex items-center gap-8">
        <Typography variant="h4" className="font-bold dark:text-slate-200 mb-5">
          {title}
        </Typography>
        <Divider 
          sx={{
            height: '2.5px',
            background: 'linear-gradient(to right, #BFACE2, #645CBB)',
            borderRadius: '16px',
            width: '250px',
          }}
        />
      </Box>
      {children}
    </Box>
  )
}

export default SectionComponent