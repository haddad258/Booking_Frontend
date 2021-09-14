import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import clsx from 'clsx';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { Hidden, Drawer, Paper } from '@material-ui/core';

import { connect } from 'react-redux';

import SidebarHeader from '../../layout-components/SidebarHeader';
import SidebarMenu from '../../layout-components/SidebarMenu';

import navItems from './navItems';
import navItemsuser from './navitemsuser';
import navitemsguest from './navItemsguest';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
const url = require('../../cfg')()
const Sidebar = props => {
  const {
    setSidebarToggleMobile,
    sidebarToggleMobile,
    sidebarFixed,

    sidebarShadow
  } = props;
  const [userrole, setuserrole] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url+"role").then((res) => {
        setuserrole(res.data);
        console.log(res.data);
      });
    };
    fetchData();
  }, []);

  const closeDrawer = () => setSidebarToggleMobile(!sidebarToggleMobile);

  const sidebarMenuContent = (
  <div>
    { <div>
   {userrole=="" && navitemsguest.map(list => (
        <SidebarMenu
          component="div"
          key={list.label}
          pages={list.content}
          title={list.label}
        />
      ))}
    </div>}
   { <div>
   {userrole=='ADMIN' && navItems.map(list => (
        <SidebarMenu
          component="div"
          key={list.label}
          pages={list.content}
          title={list.label}
        />
      ))}
    </div>}
     {<div>
     {userrole=='USER'  && navItemsuser.map(list => (
          <SidebarMenu
            component="div"
            key={list.label}
            pages={list.content}
            title={list.label}
          />
        ))}
      </div>}
      </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggleMobile}
          onClose={closeDrawer}
          variant="temporary"
          elevation={4}
          className="app-sidebar-wrapper-lg">
          <SidebarHeader />
          <PerfectScrollbar>{sidebarMenuContent}</PerfectScrollbar>
        </Drawer>
      </Hidden>

      <Hidden mdDown>
        <Paper
          className={clsx('app-sidebar-wrapper', {
            'app-sidebar-wrapper-fixed': sidebarFixed
          })}
          square
          elevation={sidebarShadow ? 11 : 3}>
          <SidebarHeader />
          <div
            className={clsx({
              'app-sidebar-menu': sidebarFixed
            })}>
            <PerfectScrollbar options={{ wheelPropagation: false }}>
              {sidebarMenuContent}
            </PerfectScrollbar>
          </div>
        </Paper>
      </Hidden>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarFixed: state.ThemeOptions.sidebarFixed,
  headerFixed: state.ThemeOptions.headerFixed,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
