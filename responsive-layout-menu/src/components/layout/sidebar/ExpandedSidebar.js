import { CategoryMarker } from 'components/layout/sidebar/Marker';
import React from 'react';
import {
  MdChevronRight,
  MdFlip,
  MdHome,
  MdSecurity,
  MdSettingsApplications,
  MdSupervisorAccount,
} from 'react-icons/md';

const ExpandedSidebar = ({ onToggle }) => {
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
      <div className="sidebar-category-item">
        <CategoryMarker selected={true} />
        <MdSettingsApplications className="sidebar-category-icon" />
        <div className="sidebar-category-text">애플리케이션정책 관리</div>
        <MdChevronRight className="sidebar-expand-icon" />
      </div>
      <div className="sidebar-category-item">
        <CategoryMarker selected={true} />
        <MdSecurity className="sidebar-category-icon" />
        <div className="sidebar-category-text">방화벽</div>
        <MdChevronRight className="sidebar-expand-icon" />
      </div>
      <div className="sidebar-category-item">
        <CategoryMarker selected={true} />
        <MdSupervisorAccount className="sidebar-category-icon" />
        <div className="sidebar-category-text">사용자 관리</div>
        <MdChevronRight className="sidebar-expand-icon" />
      </div>
      <div className="sidebar-toggle">
        <div className="sidebar-category-item" onClick={onToggle}>
          <CategoryMarker selected={false} />
          <MdFlip className="sidebar-category-icon" />
          <div className="sidebar-category-text">Toggle Sidebar</div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedSidebar;
