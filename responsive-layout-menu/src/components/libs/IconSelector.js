import React from 'react';
import {
  MdFlip,
  MdHome,
  MdSecurity,
  MdSettingsApplications,
  MdSupervisorAccount,
} from 'react-icons/md';

const ICON_TYPES = {
  mdFlip: <MdFlip className="sidebar-category-icon" />,
  mdHome: <MdHome className="sidebar-category-icon" />,
  mdSecurity: <MdSecurity className="sidebar-category-icon" />,
  mdSettingsApplications: (
    <MdSettingsApplications className="sidebar-category-icon" />
  ),
  mdSupervisorAccount: (
    <MdSupervisorAccount className="sidebar-category-icon" />
  ),
};

const IconSelector = ({ iconType }) => {
  return <>{ICON_TYPES[iconType]}</>;
};

export default IconSelector;
