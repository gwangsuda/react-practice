import {
  CategoryMarker,
  DropdownCategoryMarker,
  SubCategoryMarker,
} from 'components/layout/sidebar/Marker';
import IconSelector from 'components/libs/IconSelector';
import MenuContext from 'contexts/MenuContext';
import React, { useContext } from 'react';
import {
  MdChevronRight,
  MdExpandMore,
  MdFlip,
  MdHome,
  MdMoreVert,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const ExpandedSidebar = ({ onToggleSidebar }) => {
  const { state, dispatch } = useContext(MenuContext);

  return (
    <div className="sidebar">
      <Home />

      <ul className="sidebar-expand-categories">
        {state.map(menu => (
          <li key={menu.id}>
            <div
              className="sidebar-category-item"
              onClick={() => {
                dispatch({ type: 'CATEGORY_TOGGLE', payload: menu.id });
              }}
            >
              <CategoryMarker marked={menu.marked} />
              <IconSelector iconType={menu.iconType} />
              <div className="sidebar-category-text">{menu.name}</div>
              {menu.expanded ? (
                <MdExpandMore className="sidebar-expand-icon" />
              ) : (
                <MdChevronRight className="sidebar-expand-icon" />
              )}
            </div>
            {menu.expanded && menu.subcategories.length !== 0 && (
              <ExpandedSubCategoryList categories={menu.subcategories} />
            )}
          </li>
        ))}
      </ul>

      <Toggle onToggleSidebar={onToggleSidebar} />
    </div>
  );
};

const ExpandedSubCategoryList = ({ categories }) => {
  return (
    <ul className="sidebar-expand-subcategories">
      {categories.map(category => (
        <SubCategoryItem category={category} />
      ))}
    </ul>
  );
};

const SubCategoryItem = ({ category }) => {
  const refDropdown = React.createRef();

  const onMouseEnterCategory = e => {
    e.preventDefault();
    if (!refDropdown.current) return;

    const { top, width } = e.target.getBoundingClientRect();
    refDropdown.current.style.top = `${top}px`;
    refDropdown.current.style.left = `${width}px`;
  };

  return (
    <li
      key={category.id}
      className="sidebar-expand-subcategory"
      onMouseEnter={onMouseEnterCategory}
    >
      {category.isGroup ? (
        <div className="sidebar-expand-subcategory-item-group">
          {category.name}
        </div>
      ) : (
        <Link to={category.url}>
          <div className="sidebar-expand-subcategory-item">
            <SubCategoryMarker marked={category.marked} />
            <span className="text">{category.name}</span>
            {!category.isGroup && category.subcategories.length !== 0 && (
              <MdMoreVert size={13} className="more" />
            )}
          </div>
        </Link>
      )}
      {category.subcategories.length !== 0 && (
        <div className="sidebar-expand-dropdown" ref={refDropdown}>
          <DropdownList subcategories={category.subcategories} />
        </div>
      )}
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
            <>
              <li key={category.id} className="parent">
                <DropdownItem category={category} />
                <DropdownList subcategories={category.subcategories} />
              </li>
            </>
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

const Home = () => {
  return (
    <div className="sidebar-home">
      <CategoryMarker selected={false} />
      <Link to="/">
        <MdHome className="sidebar-home-icon" />
      </Link>
      <div className="sidebar-home-info">
        <div className="sidebar-home-title">Switch-131</div>
        <div className="sidebar-home-subtitle">OS Version: v2.2.4.2.0-rc1</div>
      </div>
    </div>
  );
};

const Toggle = ({ onToggleSidebar }) => {
  return (
    <div className="sidebar-toggle">
      <div className="sidebar-category-item" onClick={onToggleSidebar}>
        <CategoryMarker selected={false} />
        <MdFlip className="sidebar-category-icon" />
        <div className="sidebar-category-text">Toggle Sidebar</div>
      </div>
    </div>
  );
};

export default ExpandedSidebar;
