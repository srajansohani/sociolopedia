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
  const isAuth = useSelector((state)=>state.token)
  console.log(isAuth);
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme} >
      <CssBaseline />
      <Routes>
          <Route path = '/' element = {<Login />} />
          <Route path = '/home' element = {isAuth ? <Home /> : <Navigate to ="/" />} />
          <Route path = '/profile/:userId' element = { isAuth ? <Profile /> :<Navigate to ="/" /> } />
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
