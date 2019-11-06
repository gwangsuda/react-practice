import React from 'react';
import SubCategoryList from 'components/layout/menu/SubCategoryList.js';
import CategoryItem from 'components/layout/menu/CategoryItem.js';

const CategoryList = ({ menus, onToggleCategory }) => {
  return (
    <div>
      <ul className="container">
        {menus.map(menu => (
          <li key={menu.id}>
            <CategoryItem item={menu} onToggle={onToggleCategory} />
            {menu.expanded && <SubCategoryList list={menu.subList} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(CategoryList);
