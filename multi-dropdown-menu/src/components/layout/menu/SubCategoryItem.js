import React from 'react';
import { Link } from 'react-router-dom';
import { TiChevronRight } from 'react-icons/ti';

const SubCategoryItem = ({ name }) => {
  return (
    <>
      <Link>
        <TiChevronRight />
        {name}
      </Link>
    </>
  );
};

export default SubCategoryItem;
