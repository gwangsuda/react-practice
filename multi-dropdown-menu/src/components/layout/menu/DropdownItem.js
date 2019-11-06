import React from 'react';
import { GoKebabVertical, GoGrabber } from 'react-icons/go';
import 'assets/scss/Dropdown.scss';

const DropdownItem = ({ menu }) => {
  return (
    <div className="dropdown-item">
      <GoGrabber />
      <span className="dropdown-text">{menu.name}</span>{' '}
      {menu.dropdownList.length !== 0 && <GoKebabVertical />}
    </div>
  );
};

export default DropdownItem;
