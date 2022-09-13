export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
};
