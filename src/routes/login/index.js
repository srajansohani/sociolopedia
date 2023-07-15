import { useTheme } from '@emotion/react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import Navbar from 'components/Navbar'
import React from 'react'
import Form from './Form'

function Login() {
 const theme = useTheme();
 const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  
    return (
        <Box width= "100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
            <Typography
             fontWeight="bold"
             fontSize="32px"
             color="primary"
            >
                Sociopedia
            </Typography> 
        <Box
          width={isNonMobileScreen ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="2.5rem"
          backgroundColor={theme.palette.background.alt}
        >
        <Typography fontWeight="500" variant='h5' sx={{mb: "1.5rem"}}>
            Welcome to socialpedia, the social media for sociopath
        </Typography>
        </Box>
        <Form />
        </Box>
    )
}

export default Login