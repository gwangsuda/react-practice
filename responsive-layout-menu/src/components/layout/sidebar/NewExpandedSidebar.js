import { DropdownList } from 'components/layout/sidebar/DropdownCategoryList';
import {
  CategoryMarker,
  SubCategoryMarker,
} from 'components/layout/sidebar/Marker';
import IconSelector from 'components/libs/IconSelector';
import $ from 'jquery';
import React, { useEffect } from 'react';
import {
  MdChevronRight,
  MdExpandMore,
  MdFlip,
  MdHome,
  MdMoreVert,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const NewExpandedSidebar = ({ menus, onToggleSidebar, onToggleCategory }) => {
  useEffect(() => {
    $('li.parent').on('mouseover', function() {
      const $item = $(this);
      const $wrapper = $('> .wrapper', $item);
      const { top, left } = $item.position();
      $wrapper.css({
        top: top,
        left: left + Math.round($item.outerWidth()),
      });
    });
    $('li.sidebar-expand-subcategory').on('mouseover', function() {
      const $item = $(this);
      const $wrapper = $('> .sidebar-expand-dropdown', $item);
      const { top, left } = $item.position();
      $wrapper.css({
        top: top,
        left: left + Math.round($item.outerWidth()),
      });
    });
  }, [menus]);

  return (
    <div className="sidebar">
      <div className="sidebar-home">
        <CategoryMarker selected={false} />
        <MdHome className="sidebar-home-icon" />
        <div className="sidebar-home-info">
          <div className="sidebar-home-title">Switch-131</div>
          <div className="sidebar-home-subtitle">
            OS Version: v2.2.4.2.0-rc1
          </div>
        </div>
      </div>

      <ul className="sidebar-expand-categories">
        {menus.map(menu => (
          <li key={menu.id}>
            <div
              className="sidebar-category-item"
              onClick={() => onToggleCategory(menu.id)}
            >
              <CategoryMarker marked={menu.marked} />
              <IconSelector iconType={menu.iconType} />
              <div className="sidebar-category-text">{menu.name}</div>
              {menu.expanded ? (
                <MdExpandMore className="sidebar-expand-icon" />
              ) : (
                <MdChevronRight className="sidebar-expand-icon" />
              )}
            </div>
            {menu.expanded &&
              (menu.subcategories.length !== 0 && (
                <ExpandedSubCategoryList categories={menu.subcategories} />
              ))}
          </li>
        ))}
      </ul>

      <div className="sidebar-toggle">
        <div className="sidebar-category-item" onClick={onToggleSidebar}>
          <CategoryMarker selected={false} />
          <MdFlip className="sidebar-category-icon" />
          <div className="sidebar-category-text">Toggle Sidebar</div>
        </div>
      </div>
    </div>
  );
};

const ExpandedSubCategoryList = ({ categories }) => {
  return (
    <ul className="sidebar-expand-subcategories">
      {categories.map(category => (
        <li key={category.id} className="sidebar-expand-subcategory">
          <ExpandedSubCategoryItem category={category} />
          {category.subcategories.length !== 0 && (
            <div className="sidebar-expand-dropdown">
              <DropdownList subcategories={category.subcategories} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const ExpandedSubCategoryItem = ({ category }) => {
  return (
    <div className="sidebar-expand-subcategory-item">
      <SubCategoryMarker marked={category.marked} />
      {category.isGroup ? (
        <span className="group">{category.name}</span>
      ) : (
        <Link>
          <span className="text">{category.name}</span>
        </Link>
      )}
      {!category.isGroup && category.subcategories.length !== 0 && (
        <MdMoreVert size={13} className="more" />
      )}
    </div>
  );
};

export default NewExpandedSidebar;
