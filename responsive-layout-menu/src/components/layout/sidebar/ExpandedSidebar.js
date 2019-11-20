import { CategoryMarker } from 'components/layout/sidebar/Marker';
import IconSelector from 'components/libs/IconSelector';
import React from 'react';
import { MdFlip, MdChevronRight, MdExpandMore, MdHome } from 'react-icons/md';
import ExpandedSubCategoryList from './ExpandedSubCategoryList';

const ExpandedSidebar = ({ menus, onToggleSidebar, onToggleCategory }) => {
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

      <div className="sidebar-category-container">
        {menus.map(menu => (
          <>
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
            {menu.expanded && (
              <ExpandedSubCategoryList categories={menu.subcategories} />
            )}
          </>
        ))}
      </div>

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

export default ExpandedSidebar;
