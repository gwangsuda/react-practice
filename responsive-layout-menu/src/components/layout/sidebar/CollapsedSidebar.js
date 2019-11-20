import {
  DropdownCategoryMarker,
  CategoryMarker,
} from 'components/layout/sidebar/Marker';
import $ from 'jquery';
import React, { useEffect } from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import IconSelector from 'components/libs/IconSelector';
import { MdMoreVert, MdFlip } from 'react-icons/md';

const CollapsedSidebar = ({ menus, onToggleSidebar, onToggleCategory }) => {
  useEffect(() => {
    $('li.parent').on('mouseover', function() {
      const $item = $(this);
      const $wrapper = $('> .wrapper', $item);
      const { top, left } = $item.position();
      $wrapper.css({
        top: top - 3,
        left: left + Math.round($item.outerWidth()),
      });
    });

    $('li.sidebar-collapse-category').on('click', function() {
      const $item = $(this);
      const $wrapper = $('> .sidebar-collapse-dropdown', $item);
      $wrapper.is(':visible') ? $wrapper.hide() : $wrapper.show();
      const { top } = $item.position();
      $wrapper.css({
        top: top,
        left: 39,
      });
    });
  }, []);

  return (
    <div className="sidebar sidebar-collpased">
      {/* home button */}
      <div className="sidebar-home">
        <CategoryMarker selected={false} />
        <Link to="/">
          <MdHome className="sidebar-home-icon" />
        </Link>
      </div>

      {/* category buttons */}
      <ul className="sidebar-collapse-categories">
        {menus.map(menu => (
          <li key={menu.id} className="sidebar-collapse-category">
            <div className="sidebar-category-item">
              <CategoryMarker selected={menu.marked} />
              <IconSelector iconType={menu.iconType} />
            </div>
            {menu.subcategories.length !== 0 && (
              <div className="sidebar-collapse-dropdown">
                <DropdownList subcategories={menu.subcategories} />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* toggle button */}
      <div className="sidebar-toggle">
        <div className="sidebar-category-item" onClick={onToggleSidebar}>
          <CategoryMarker selected={false} />
          <MdFlip className="sidebar-category-icon" />
        </div>
      </div>
    </div>
  );
};

const DropdownList = ({ subcategories }) => {
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

export default CollapsedSidebar;
