import React, { useState } from 'react'
import {
    Box, Drawer, Divider, List,
    ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon  from "@mui/icons-material/ChevronLeft"

const drawerWidth = 240;

export const Sidebar = () => {
    const [sidebarMenu, showSidebarMenu] = useState(false);

    const setOpen = () => [showSidebarMenu(!sidebarMenu)];

    const drawer = (
        <div>
          <div className="flex toolbar-header">
            <h4>Account Balance</h4>
            <IconButton onClick={setOpen}>
               <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {
                [
                    {text: "Home", path: "/" }, 
                    {text: "Transactions", path: "/transactions" }
                ].map((item, index) => (
                <Link to={item.path} className="decoration-none">
                    <ListItem button key={item.text}>
                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item.text}  />
                     </ListItem>
                </Link>
              
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    

    return (
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={sidebarMenu}
          onClose={setOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    )
}
