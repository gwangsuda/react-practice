import React, { useState } from 'react';
import { CategoryMarker } from 'components/layout/sidebar/Marker';
import { Link } from 'react-router-dom';
import {
  MdFlip,
  MdHome,
  MdSecurity,
  MdSettingsApplications,
  MdSupervisorAccount,
} from 'react-icons/md';

const CollpasedSidebar = ({ onToggle }) => {
  const [visible, setVisible] = useState(false);

  const onClickDropdown = () => {
    setVisible(!visible);
  };

  return (
    <div className="sidebar sidebar-collpased">
      <div className="sidebar-home">
        <CategoryMarker selected={false} />
        <Link to="/">
          <MdHome className="sidebar-home-icon" />
        </Link>
      </div>

      <div className="sidebar-category-item">
        <CategoryMarker selected={true} />
        <MdSettingsApplications
          className="sidebar-category-icon"
          onClick={onClickDropdown}
        />
      </div>
      <div className="sidebar-category-item">
        <CategoryMarker selected={true} />
        <MdSecurity className="sidebar-category-icon" />
      </div>
      <div className="sidebar-category-item">
        <CategoryMarker selected={true} />
        <MdSupervisorAccount className="sidebar-category-icon" />
      </div>
      <div className="sidebar-toggle">
        <div className="sidebar-category-item" onClick={onToggle}>
          <CategoryMarker selected={false} />
          <MdFlip className="sidebar-category-icon" />
        </div>
      </div>
    </div>
  );
};

export default CollpasedSidebar;
