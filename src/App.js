import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: "10px" }}>
        <AppBar position="static" color="transparent">
          <Toolbar variant="dense">
            <a href="https://github.com/blopDev">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <AccountCircleRounded fontSize="large" color="info" />
              </IconButton>
            </a>

            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ flexGrow: 2 }}
            >
              Michael Counseller
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
