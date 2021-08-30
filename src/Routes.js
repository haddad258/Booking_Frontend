import React, { lazy, Suspense, useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "@material-ui/styles";

import MuiTheme from "./theme";

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from "./layout-blueprints";

// Example Pages
import Inscription from "example-pages/Insciption/Inscription";
import ResetPassword from "example-pages/ResetPassword/ResetPassword";
import NewPassword from "example-pages/NewPassword/NewPassword";
import userProfile from "example-pages/userProfile/userProfile";
import EditProfile from "example-pages/userProfile/EditProfile/EditProfile";
const LandingPage = lazy(() => import("./example-pages/LandingPage"));
const Forreserved = lazy(() => import('./Settings/ForReserved'));
const Cart = lazy(() => import('./Cart/Cart'));
const Galleries = lazy(() => import('./Settings/Galleries'));
const Ticket = lazy(() => import('./ticket/Ticket'));
const Acceuil = lazy(() => import('./Acceuil/Acceuil'));
const Users = lazy(() => import('./Settings/Users'));
const Transport = lazy(() => import('./Settings/Transport'));
const Equipmentreservation = lazy(() => import('./Settings/Equipmentreservation'));
const Calander = lazy(() => import('./Settings/Bigcalander'));
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
          <Redirect exact from="/" to="/LandingPage" />
            <Route path="/inscription">
              <Inscription />
            </Route>{" "}
            <Route path="/resetpassword">
              <ResetPassword />
            </Route>
            <Route path="/new-password/:token">
              <NewPassword />
            </Route>
            <Route path={["/LandingPage"]}>
              <PresentationLayout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Route path="/LandingPage" component={LandingPage} />
                  </motion.div>
                </Switch>
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
                '/Transport',
                '/userProfile',
                '/account/orders',
                '/account/signin',
                '/account/signup',
                '/account/forgotpassword',
                '/account/Notification',
                '/Acceuil',
                '/profile/edit-profile',
                '/Calander'
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
                    
                    <Route
                      path="/Acceuil"
                      component={Acceuil}
                    />
                    <Route
                      path="/profile/edit-profile'"
                      component={EditProfile}
                    />
                    <Route
                      path="/userProfile"
                      component={userProfile}
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
                    <Route path="/Calander" component={Calander}/>
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


