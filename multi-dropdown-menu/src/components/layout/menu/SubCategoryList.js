import React from 'react';
import { Link } from 'react-router-dom';
import { TiChevronRight } from 'react-icons/ti';
import 'assets/scss/SubCategory.scss';
import DropdownList from './DropdownList';

const SubMenuList = ({ list }) => {
  if (list.length === 0) {
    return <></>;
  }

  return (
    <div className="sub-menus">
      <ul className="dropdown">
        {list.map(menu => (
          <li key={menu.id}>
            <Link>
              <TiChevronRight />
              {menu.name}
            </Link>
            {menu.dropdownList.length !== 0 && (
              <DropdownList list={menu.dropdownList} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenuList;
