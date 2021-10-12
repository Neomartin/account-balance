import React, { useState, useEffect } from "react";
import {
  Box, IconButton, AppBar, Toolbar, Typography,  } from "@mui/material";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";


const drawerWidth = 240;

export const Header = ({title}) => {
    // const title = "Algo";
   
  const [sidebarMenu, showSidebarMenu] = useState(false);

  const setOpen = () => [showSidebarMenu(!sidebarMenu)];

  
  //   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box sx={{ display: "flex" }}>
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={setOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="capitalize">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      
      </>
    // /* </Box> */}
  );
};
