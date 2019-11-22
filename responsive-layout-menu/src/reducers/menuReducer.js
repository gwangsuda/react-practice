const menuReducer = (state, action) => {
  switch (action.type) {
    case 'CATEGORY_TOGGLE':
      return state.map(menu =>
        menu.id === action.payload
          ? { ...menu, expanded: !menu.expanded, marked: !menu.marked }
          : menu,
      );
    default:
      return state;
  }
};

export default menuReducer;
