import * as React from "react";
import { AppBar, Box, Breadcrumbs, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";


export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: "10px" }}>
        <AppBar position="static" color="transparent" sx={{  }}>
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
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="project/:projectName" element={<Project/>}/>
      </Routes>
    </>
  );
}
