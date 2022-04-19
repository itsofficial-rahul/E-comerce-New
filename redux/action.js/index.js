export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const cartDataDelete = (item) => {
  return {
    type: "CARTDATADELETE",
    payload: item,
  };
};

export const OrderDataACtion = (item, add) => {
  console.log("action me daat", add);
  const data = { ...item, ...add };
  return {
    type: "ORDERDATA",
    payload: data,
  };
};

export const BuyProduct = (Buyproduct) => {
  console.log("this is buy product", Buyproduct);
  return {
    type: "BUYPPODUCT",
    payload: Buyproduct,
  };
};
