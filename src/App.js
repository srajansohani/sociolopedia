import React from "react";
import {BrowserRouter, Route,Routes,Navigate} from "react-router-dom"
import Home from "routes/home";
import Login from "routes/login";
import Profile from "routes/profile";
import {useMemo,useState,useEffect} from 'react';
import {useSelector} from 'react-redux'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { themeSettings } from "./theme";
function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme} >
      <CssBaseline />
      <Routes>
          <Route path = '/' element = {<Login />} />
          <Route path = '/home' element = {<Home />} />
          <Route path = '/profile/:userId' element = {<Profile />} />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
