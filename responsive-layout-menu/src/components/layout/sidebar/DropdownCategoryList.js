import { DropdownCategoryMarker } from 'components/layout/sidebar/Marker';
import React from 'react';
import { MdMoreVert } from 'react-icons/md';

export const DropdownList = ({ subcategories }) => {
  if (subcategories.length === 0) {
    return <></>;
  }

  return (
    <div className="wrapper">
      <ul>
        {subcategories.map(category =>
          category.subcategories.length !== 0 ? (
            <>
              <li className="parent">
                <DropdownItem category={category} />
                <DropdownList subcategories={category.subcategories} />
              </li>
            </>
          ) : (
            <li>
              {category.isGroup ? (
                <span className="sidebar-dropdown-item-group">
                  {category.name}
                </span>
              ) : (
                <DropdownItem category={category} />
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

const DropdownItem = ({ category }) => {
  console.log(category.name);
  return (
    <div className="sidebar-dropdown-item">
      <DropdownCategoryMarker selected={category.marked} />
      <span className="text">{category.name}</span>
      {category.subcategories.length !== 0 && (
        <MdMoreVert size={13} className="more" />
      )}
    </div>
  );
};

const DropdownCategoryList = () => {
  return <div></div>;
};

export default DropdownCategoryList;
