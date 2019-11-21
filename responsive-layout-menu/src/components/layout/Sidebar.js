import CollapsedSidebar from 'components/layout/sidebar/CollapsedSidebar';
import ExpandedSidebar from 'components/layout/sidebar/ExpandedSidebar';
import MenuContext from 'contexts/MenuContext';
import defaultMenus from 'menu.json';
import React, { useCallback, useReducer, useState } from 'react';
import menuReducer from 'reducers/menuReducer';

const Sidebar = () => {
  const [menus, setMenus] = useState(defaultMenus);
  const [collapse, setCollapse] = useState(false);

  const onToggleSidebar = useCallback(() => {
    setCollapse(!collapse);
  }, [collapse]);

  const onToggleCategory = useCallback(id => {
    setMenus(menus =>
      menus.map(menu =>
        menu.id === id
          ? { ...menu, expanded: !menu.expanded, marked: !menu.marked }
          : menu,
      ),
    );
  }, []);

  const [state, dispatch] = useReducer(menuReducer, defaultMenus);

  return (
    <>
      <MenuContext.Provider value={{ state, dispatch }}>
        {collapse ? (
          <CollapsedSidebar onToggleSidebar={onToggleSidebar} />
        ) : (
          <ExpandedSidebar
            menus={menus}
            onToggleSidebar={onToggleSidebar}
            onToggleCategory={onToggleCategory}
          />
        )}
      </MenuContext.Provider>
    </>
  );
};

export default Sidebar;
