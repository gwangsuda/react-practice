import React from 'react';
import { Link } from 'react-router-dom';

const ExpandedDropdownCategoryList = ({ categories }) => {
  if (categories.length === 0) {
    return <></>;
  }

  return (
    <ul>
      {categories.map(category => (
        <li key={category.id}>
          <Link to={category.url}>{category.name}</Link>
          {category.subcategories.length !== 0 && (
            <ExpandedDropdownCategoryList categories={category.subcategories} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ExpandedDropdownCategoryList;
