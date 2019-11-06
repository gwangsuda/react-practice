import React from 'react';
import { MdPerson, MdDashboard, MdCached } from 'react-icons/md';
import 'assets/scss/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <MdCached size={20} /> <MdDashboard size={20} /> <MdPerson size={20} />
    </header>
  );
};

export default Header;
