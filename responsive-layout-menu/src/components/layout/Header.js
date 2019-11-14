import React from 'react';
import {
  MdAccountCircle,
  MdHelpOutline,
  MdMenu,
  MdNotifications,
  MdSettings,
} from 'react-icons/md';

const Header = () => {
  return (
    <div className="header">
      <Menu />
      <Logo />
      <div className="header-item-gnb">
        <Notification />
        <Setting />
        <Help />
        <User />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="header-item">
      <MdMenu className="header-icons" />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="header-item">
      <span className="header-logo">WEBFRONT-K</span>
    </div>
  );
};

const User = () => {
  return <MdAccountCircle className="header-icons" />;
};

const Help = () => {
  return <MdHelpOutline className="header-icons" />;
};

const Setting = () => {
  return <MdSettings className="header-icons" />;
};

const Notification = () => {
  return <MdNotifications className="header-icons" />;
};

export default Header;
