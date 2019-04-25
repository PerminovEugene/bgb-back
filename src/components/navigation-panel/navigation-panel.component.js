import React from 'react';
import classNames from 'classnames';
import './navigation-panel.styles.styl';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons';

export default class NavigationPanel extends React.Component {
  render() {
    return (
      <aside className="navigation-panel">
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames('drawer-papper' /*!this.state.open && classes.drawerPaperClose*/)
          }}
          open={true}
        >
          <div className="toolbar-icon">
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>main List Items</List>
        </Drawer>
      </aside>
    );
  }

  handleDrawerClose = () => {
    console.log('close');
  };
}
