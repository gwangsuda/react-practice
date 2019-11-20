import { SubCategoryMarker } from 'components/layout/sidebar/Marker';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdMoreVert } from 'react-icons/md';
import ExpandedDropdownCategoryList from './ExpandedDropdownCategoryList';

const ExpandedSubCategoryList = ({ categories }) => {
  return (
    <div className="sidebar-expand-subcategories">
      <ul className="sidebar-expand-subcategories-dropdown">
        {categories.map(category => (
          <li key={category.id}>
            <ExpandedSubCategoryItem category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExpandedSubCategoryItem = ({ category }) => {
  return (
    <div className="sidebar-subcategory-item">
      <SubCategoryMarker marked={category.marked} />
      {category.isGroup ? (
        <span className="sidebar-expand-subcategory-item-text">
          {category.name}
        </span>
      ) : (
        <Link>{category.name}</Link>
      )}
      {!category.isGroup && category.subcategories.length !== 0 && (
        <MdMoreVert size={13} className="sidebar-more-view" />
      )}
      {category.subcategories.length !== 0 && (
        <ExpandedDropdownCategoryList categories={category.subcategories} />
      )}
    </div>
  );
};

export default ExpandedSubCategoryList;
