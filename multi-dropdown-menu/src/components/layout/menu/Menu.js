import React, { useState, useCallback } from 'react';
import CategoryList from 'components/layout/menu/CategoryList';
import 'assets/scss/Menu.scss';
import defaultMenus from 'menu.json';

const Menu = () => {
  const [menus, setMenus] = useState(defaultMenus);

  const onToggleCategory = useCallback(id => {
    setMenus(menus =>
      menus.map(menu =>
        menu.id === id ? { ...menu, expanded: !menu.expanded } : menu,
      ),
    );
  }, []);

  return (
    <aside className="aside">
      <CategoryList menus={menus} onToggleCategory={onToggleCategory} />
    </aside>
  );
};

export default Menu;
