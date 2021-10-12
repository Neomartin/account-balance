import React, { useState, useEffect } from 'react';
//Components
import { Header } from './Layout/header';
import { Home } from './Pages/home';
import { Transactions } from './Pages/transactions/transactions';

import { Box, Toolbar, Typography, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, useLocation  } from 'react-router-dom';
import { Sidebar } from './Layout/sidebar/sidebar';

function App() {
 const title = useLocation().pathname.split("/").pop();
    //  
  
    useEffect(() => {
      console.log(title);
    }, [title])
  // const toolBarRender =  
  return (
    <>

        <Box>
          <CssBaseline />
          <Header title={title ? title : "Home"}></Header>
          <Sidebar></Sidebar>
          <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "240px", marginTop: "64px" }}>
          {/* <Link to="/">Home</Link>
          <Link to="/transactions">Transactions</Link> */}
            
            <Switch>
              <Route path='/transactions' >
                <Transactions />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Box>
        </Box>

    </>
  );
}

export default App;
