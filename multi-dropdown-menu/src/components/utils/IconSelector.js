import React from 'react';
import { MdAssessment, MdLaptop, MdAccountBox } from 'react-icons/md';

const ICON_TYPES = {
  appPolicy: <MdAssessment />,
  userManagement: <MdAccountBox />,
  management: <MdLaptop />,
};

const IconSelector = ({ iconType }) => {
  return <>{ICON_TYPES[iconType]}</>;
};

export default IconSelector;
