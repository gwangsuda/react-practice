import React from 'react';
import styled from 'styled-components';

export const CategoryMarker = styled.div`
  width: 3px;
  height: 36px;
  background-color: ${props =>
    props.marked ? 'hsla(208, 66%, 37%, 1)' : 'hsla(0, 0%, 91%, 1)'};
`;

export const SubCategoryMarker = styled.div`
  width: 2px;
  height: 29px;
  background-color: ${props =>
    props.marked ? 'hsla(208, 66%, 37%, 1)' : 'hsla(0, 0%, 91%, 1)'};
`;

export const DropdownCategoryMarker = styled.div`
  width: 2px;
  height: 29px;
  background-color: ${props =>
    props.marked ? 'hsla(208, 66%, 37%, 1)' : 'hsla(0, 0%, 91%, 1)'};
`;

const Marker = () => {
  return <div></div>;
};

export default Marker;
