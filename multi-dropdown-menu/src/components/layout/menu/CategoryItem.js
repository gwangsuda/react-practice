import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import 'assets/scss/Category.scss';
import IconSelector from 'components/utils/IconSelector';

const CategoryItem = ({ item, onToggle }) => {
  return (
    <div className="category-item" onClick={() => onToggle(item.id)}>
      <IconSelector iconType={item.iconType} />
      <CategoryText name={item.name} />
      {item.expanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
    </div>
  );
};

const CategoryText = ({ name }) => {
  return <div className="category-text">{name}</div>;
};

export default CategoryItem;
