import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import BookIcon from '@material-ui/icons/Book';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import menus from 'menu.json';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const ICON_TYPES = {
  info: <InfoIcon />,
  book: <BookIcon />,
};

const iconSelector = state => {
  return <div>{ICON_TYPES[state]}</div>;
};

const Menu = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Divider />
      <List>
        {menus.map((menu, index) => (
          <Link to={menu.url} key={menu.name}>
            <ListItem button key={menu.name}>
              <ListItemIcon>{iconSelector(menu.iconType)}</ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
