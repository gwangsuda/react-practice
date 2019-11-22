import { createContext } from 'react';

const MenuContext = createContext({
  state: [],
  dispatch: null,
  onClickSubCategory: () => {},
});

export default MenuContext;
