import React from 'react';
import { Link } from 'react-router-dom';
import DropdownItem from 'components/layout/menu/DropdownItem.js';

const DropdownList = ({ list }) => {
  if (list.length === 0) {
    return <></>;
  }

  return (
    <ul>
      {list.map(menu => (
        <li key={menu.id}>
          <Link to={menu.url}>
            <DropdownItem menu={menu} />
          </Link>
          {menu.dropdownList.length !== 0 && (
            <DropdownList list={menu.dropdownList} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownList;
