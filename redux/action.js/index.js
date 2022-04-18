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

export const OrderDataACtion = (item, addresses) => {
  const data = { ...item, ...addresses };
  return {
    type: "ORDERDATA",
    payload: data,
  };
};
