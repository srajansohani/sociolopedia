import React from 'react'
import { useState } from 'react'
import {Box,IconButton,InputBase,Typography,SelectMenuItem,FormControl,useTheme,useMediaQuery, Select, MenuItem} from '@mui/material'
import {Search,Message,DarkMode,LightMode,Notifications,Help,Menu,Close} from "@mui/icons-material"
import {useDispatch,useSelector} from 'react-redux'
import { setMode,setLogout } from 'state'
import { useNavigate } from 'react-router-dom' 
import FlexBetween from './FlexBetween'
function Navbar() {

    const [isMobileMenuToggled,setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch(); // to dispatch action in redux store
    const navigate = useNavigate(); // Same as useHistory
    const user = useSelector((state)=>state.user);
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const fullName = (user) ? `${user.firstName} ${user.lastName}` : "Srajan"

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem,2rem,2.25rem)"
          color="primary"
          onClick={() => {
            navigate("/home");
          }}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Sociopedia
        </Typography>
        {isNonMobileScreen && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search" />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/*DESKTOP NAV*/}
      {isNonMobileScreen ? (
        <FlexBetween gap="2rem">
          <IconButton
            onClick={() => {
              dispatch(setMode());
            }}
          >
            {theme.palettemode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MultiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(setLogout());
                }}
              >
                Logout
              </MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => {
            setIsMobileMenuToggled(!isMobileMenuToggled);
          }}
        >
          <Menu />
        </IconButton>
      )}

      {/*MOBILE VIEW*/}
      {!isNonMobileScreen && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/*Close ICon */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => {
                setIsMobileMenuToggled(!isMobileMenuToggled);
              }}
            >
              <Close />
            </IconButton>
          </Box>
          {/*Menu Items */}
          <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
            <IconButton
              onClick={() => {
                dispatch(setMode());
              }}
            >
              {theme.palettemode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MultiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(setLogout());
                  }}
                >
                  Logout
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
}

export default Navbar