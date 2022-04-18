const moment = require("moment"); //require

const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [...state, { ...product, qty: 1 }];
      }

      break;
    case "DELITEM":
      const exit1 = state.find((x) => x.id === product.id);
      if (exit1.qty === 1) {
        return state.filter((x) => x.id !== exit1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    case "CARTDATADELETE":
      const exit2 = state.find((x) => x.id === product.id);
      if (exit2) {
        return state.filter((x) => x.id !== exit2.id);
      }
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;

let initialState = {
  cartArray: [],
};
export const orderdataReducer = (state = initialState, action) => {
  const timedate = moment().format("MMMM Do YYYY, h:mm a");
  const data = action.payload;
  const obj2 = { time: timedate };
  const data3 = { ...data, ...obj2 };
  console.log("reducer", action);
  switch (action.type) {
    case "ORDERDATA":
      return { ...state, cartArray: [...state.cartArray, data3] };

    default:
      return state;
  }
};
