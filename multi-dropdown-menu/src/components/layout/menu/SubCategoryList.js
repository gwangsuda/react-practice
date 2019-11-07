import 'assets/scss/SubCategory.scss';
import React from 'react';
import DropdownList from './DropdownList';
import SubCategoryItem from './SubCategoryItem';

const SubMenuList = ({ list }) => {
  if (list.length === 0) {
    return <></>;
  }

  return (
    <div className="sub-menus">
      <ul className="dropdown">
        {list.map(menu => (
          <li key={menu.id}>
            <SubCategoryItem name={menu.name} />
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
