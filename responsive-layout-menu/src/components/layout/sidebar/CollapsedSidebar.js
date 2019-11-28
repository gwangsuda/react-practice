import {
  CategoryMarker,
  DropdownCategoryMarker,
} from 'components/layout/sidebar/Marker';
import IconSelector from 'components/libs/IconSelector';
import MenuContext from 'contexts/MenuContext';
import React, { useContext, useRef, useState } from 'react';
import { MdFlip, MdHome, MdMoreVert } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CollapsedSidebar = ({ onToggleSidebar }) => {
  const { state, dispatch } = useContext(MenuContext);

  const categoryRef = useRef(new Map());
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onClickCategory = (event, id) => {
    event.preventDefault();

    console.log(event.target);

    const ref = categoryRef.current.get(id);

    if (selectedCategory === id) {
      ref !== undefined && (ref.style.display = 'none');

      dispatch({ type: 'CATEGORY_TOGGLE', payload: id });
      setSelectedCategory(null);
    } else {
      hideSubCategories();

      const { top } = event.target.getBoundingClientRect();

      if (ref !== undefined) {
        ref.style.display = 'block';
        ref.style.top = `${top}px`;
        ref.style.left = `39px`;
      }

      dispatch({ type: 'CATEGORY_TOGGLE', payload: selectedCategory });
      dispatch({ type: 'CATEGORY_TOGGLE', payload: id });
      setSelectedCategory(id);
    }
  };

  const hideSubCategories = () => {
    categoryRef.current.forEach((value, key) => {
      value.style.display = 'none';
    });
  };

  return (
    <div className="sidebar sidebar-collpased">
      {/* home button */}
      <div className="sidebar-home">
        <CategoryMarker selected={false} />
        <Link to="/">
          <MdHome className="sidebar-home-icon" />
        </Link>
      </div>

      {/* category buttons */}
      <ul className="sidebar-collapse-categories">
        {state.map(menu => (
          <li key={menu.id} className="sidebar-collapse-category">
            <div
              className="sidebar-category-item"
              onClick={event => onClickCategory(event, menu.id)}
            >
              <CategoryMarker marked={menu.marked} />
              <IconSelector iconType={menu.iconType} />
            </div>
            {menu.subcategories.length !== 0 && (
              <div
                className="sidebar-collapse-subcategory"
                ref={item => categoryRef.current.set(menu.id, item)}
              >
                <SubCategoryList subcategories={menu.subcategories} />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* toggle button */}
      <div className="sidebar-toggle">
        <div className="sidebar-category-item" onClick={onToggleSidebar}>
          <CategoryMarker selected={false} />
          <MdFlip className="sidebar-category-icon" />
        </div>
      </div>
    </div>
  );
};

const SubCategoryList = ({ subcategories }) => {
  return (
    <ul>
      {subcategories.map(category =>
        category.subcategories.length !== 0 ? (
          <SubCategoryItem key={category.id} category={category} />
        ) : category.isGroup ? (
          <li key={category.id}>
            <span className="sidebar-dropdown-item-group">{category.name}</span>
          </li>
        ) : (
          <li key={category.id}>
            <DropdownItem category={category} />
          </li>
        ),
      )}
    </ul>
  );
};

const SubCategoryItem = ({ category }) => {
  const refDropdown = useRef();

  const onMouseEnterCategory = e => {
    const top = e.target.offsetTop;
    const width = e.target.offsetWidth;
    console.log(top, width);
    // const { top, width } = e.target.getBoundingClientRect();
    refDropdown.current.style.top = `${top}px`;
    refDropdown.current.style.left = `${width}px`;
  };

  return (
    <li key={category.id} onMouseEnter={onMouseEnterCategory}>
      <DropdownItem category={category} />
      <div className="sidebar-collapse-dropdown" ref={refDropdown}>
        <DropdownList subcategories={category.subcategories} />
      </div>
    </li>
  );
};

const DropdownList = ({ subcategories }) => {
  if (subcategories.length === 0) {
    return <></>;
  }

  return (
    <div className="wrapper">
      <ul>
        {subcategories.map(category =>
          category.subcategories.length !== 0 ? (
            <li key={category.id} className="parent">
              <DropdownItem category={category} />
              <DropdownList subcategories={category.subcategories} />
            </li>
          ) : (
            <li key={category.id}>
              {category.isGroup ? (
                <span className="sidebar-dropdown-item-group">
                  {category.name}
                </span>
              ) : (
                <DropdownItem category={category} />
              )}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

const DropdownItem = ({ category }) => {
  return (
    <Link to={category.url}>
      <div className="sidebar-dropdown-item">
        <DropdownCategoryMarker selected={category.marked} />
        <span className="text">{category.name}</span>
        {category.subcategories.length !== 0 && (
          <MdMoreVert size={13} className="more" />
        )}
      </div>
    </Link>
  );
};

export default CollapsedSidebar;
