import Carousel from "./components/Carousel";
import * as React from "react";
import { AppBar, Box, Breadcrumbs, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { AccountCircleRounded, Menu } from "@mui/icons-material";


export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <a href="https://github.com/blopDev">

              <AccountCircleRounded fontSize="large" color="info"/>
              </a>
              
            </IconButton> 
            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 2 }}>
              Michael Counseller
            </Typography>

              <Breadcrumbs>
                <Link underline="hover" href="/">Home</Link>
                <Link underline="hover" href="">Project 1</Link>
                <Link underline="hover" href="">Project 2</Link>
                <Link underline="hover" href="">Project 3</Link>
              </Breadcrumbs>
          </Toolbar>
        </AppBar>
      </Box>

      <Carousel />
      <p>Testing hello</p>
    </>
  );
}
