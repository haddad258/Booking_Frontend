import React, { Fragment,Component,lazy, Suspense,useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {
  Hidden,
  IconButton,
 
  Box,
  
  Tooltip
} from '@material-ui/core';
import {
  BrowserRouter as Router,

} from 'react-router-dom'

import moment from 'moment'
import axios from 'axios'

import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';


// Custom pages
              // Settings
const Forreserved = lazy(() => import('./Settings/ForReserved'));
const Cart = lazy(() => import('./Cart/Cart'));
const Galleries = lazy(() => import('./Settings/Galleries'));
const Ticket = lazy(() => import('./ticket/Ticket'));
const Acceuil = lazy(() => import('./Acceuil/Acceuil'));
const Users = lazy(() => import('./Settings/Users'));
const Transport = lazy(() => import('./Settings/Transport'));
const Equipmentreservation = lazy(() => import('./Settings/Equipmentreservation'));
const Cars = lazy(() => import('./Cars/cars'));
const Equipment = lazy(() => import('./Equipment/equipment'));
const Hotels = lazy(() => import('./Hotels/hotel'));
const Routes  = props => {
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  const {
    headerShadow,
    headerFixed,
    sidebarToggleMobile,
    setSidebarToggleMobile
  } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                
              </div>
            </div>
          }>
          <Switch>
            <Redirect exact from="/" to="/Acceuil" />
            <Route path={['/Acceuil']}>
              <PresentationLayout>
                <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route path="/Acceuil" component={Acceuil} />
                  </motion.div>
                </Switch>
                </LeftSidebar>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                '/Ticket',
                '/Forreserved',
                '/Cart',
                '/Equipmentreservation',
                '/Hotels',
                '/Cars',
                '/Equipment',
                // custom routes
                '/Galleries',
                '/Users',
                '/Transport'
              ]}>
              <LeftSidebar>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route
                      path="/Ticket"
                      component={Ticket}
                    />
                    
                    
                    
                    {/* custom Routes */}
                    <Route path="/Users" component={Users} />
                    <Route path="/Transport" component={Transport} />
                    <Route path="/Equipmentreservation" component={Equipmentreservation} />
                    <Route path="/cars" component={Cars} />
                    <Route path="/hotels" component={Hotels} />
                    <Route path="/equipment" component={Equipment} />
                    <Route path="/Cart" component={Cart} />
                    <Route path="/Forreserved" component={Forreserved} />
                    <Route path="/Galleries" component={Galleries} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>
          </Switch>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Routes;


