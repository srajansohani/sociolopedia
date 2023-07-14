import React from 'react'
import { useState } from 'react'
import { Box, TextField, Typography, useMediaQuery } from '@mui/material';
import { EditOutlined } from '@mui/icons-material'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { setLogin} from 'state';
import Dropzone from 'react-dropzone'


function Form() {
    const registerSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName:yup.string().required("required"),
        email:yup.string().email("invalid-email").required("required"),
        password:yup.string().required("required"),
        location: yup.string().required("required"),
        occupation: yup.string().required("required"),
        picture: yup.string().required("required"),
    })
    const loginSchema = yup.object().shape({
        email:yup.string().email("invalid-email").required("required"),
        password:yup.string().required("required"),
    })
    const initialValuesRegister = {
        firstName:"" ,
        lastName:"",
        email:"",
        password:"",
        location: "",
        picture: "",
    }
    const initialValuesLogin = {
        email:"",
        password:""
    }

    const [pageType,setPageType] = useState("login");
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery('(min-width: 600px)');
    const isLogin = pageType === "Login";
    const isRegister = pageType === "Register";
    const handleFormSubmit = async(values,onSubmitProps)=>{

    }
  return (
    <Formik
      onSubmit={handleFormSubmit} 
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema: registerSchema}
    > 
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm
        })=>(
            <form onSubmit={handleSubmit}>
                <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4,minmax(0,1fr)"
                sx={{
                    "& > div": {gridColumn: isNonMobile ? undefined: "span 4"}
                }}
                >
                    {isRegister && (
                        <>
                            <TextField
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName} 
                                name='firstName'
                                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                                sx={{gridColumn: "span 2"}}
                            / >
                             <TextField
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName} 
                                name='lastName'
                                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: "span 2"}}
                            / >
                             <TextField
                                label="Location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location} 
                                name='Location'
                                error={Boolean(touched.location) && Boolean(errors.location)}
                                helperText={touched.location && errors.location}
                                sx={{gridColumn: "span 4"}}
                            / >
                             <TextField
                                label="Occupation"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.occupation} 
                                name='occupation'
                                error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                                helperText={touched.occupation && errors.occupation}
                                sx={{gridColumn: "span 4"}} />

                                <Box
                                 gridColumn="span 4"
                                 border={`1px solid ${palette}`}
                                >

                                </Box>
                        </>
                    )}
                </Box>
            </form>
        )}
    </Formik>
  )
}


export default Form