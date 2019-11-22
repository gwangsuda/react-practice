import CollapsedSidebar from 'components/layout/sidebar/CollapsedSidebar';
import ExpandedSidebar from 'components/layout/sidebar/ExpandedSidebar';
import MenuContext from 'contexts/MenuContext';
import defaultMenus from 'menu.json';
import React, { useCallback, useReducer, useState } from 'react';
import menuReducer from 'reducers/menuReducer';

const Sidebar = () => {
  const [collapse, setCollapse] = useState(true);

  const onToggleSidebar = useCallback(() => {
    setCollapse(!collapse);
  }, [collapse]);

  const [state, dispatch] = useReducer(menuReducer, defaultMenus);

  return (
    <>
      <MenuContext.Provider value={{ state, dispatch }}>
        {collapse ? (
          <CollapsedSidebar onToggleSidebar={onToggleSidebar} />
        ) : (
          <ExpandedSidebar onToggleSidebar={onToggleSidebar} />
        )}
      </MenuContext.Provider>
    </>
  );
};

export default Sidebar;
