import React, { useCallback, useState } from 'react';
import CollapsedSidebar from 'components/layout/sidebar/CollapsedSidebar';
import ExpandedSidebar from 'components/layout/sidebar/ExpandedSidebar';
import defaultMenus from 'menu.json';

const Sidebar = () => {
  const [menus, setMenus] = useState(defaultMenus);
  const [collapse, setCollapse] = useState(true);

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

  return (
    <>
      {collapse ? (
        <CollapsedSidebar
          menus={menus}
          onToggleSidebar={onToggleSidebar}
          onToggleCategory={onToggleCategory}
        />
      ) : (
        <ExpandedSidebar
          menus={menus}
          onToggleSidebar={onToggleSidebar}
          onToggleCategory={onToggleCategory}
        />
      )}
    </>
  );
};

export default Sidebar;
