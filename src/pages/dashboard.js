import React from 'react';
import PropTypes from 'prop-types';

import Page from '../layouts/main';

const drawerWidth = 240;

const styles = theme => ({
  // root: {
  //   display: 'flex'
  // },
  // appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing.unit * 3,
  //   height: '100vh',
  //   overflow: 'auto'
  // },
  // chartContainer: {
  //   marginLeft: -22
  // },
  // tableContainer: {
  //   height: 320
  // },
  // h5: {
  //   marginBottom: theme.spacing.unit * 2
  // }
});

export default class Dashboard extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return <div />;
    // return <Page>aa</Page>;
  }
}
