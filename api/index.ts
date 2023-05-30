export const getProducts = () => {
  const query = `*[_type == "product"] {
        _id,
        id,
        name,
        image,
        price,
        category
    }`;
  return query;
};

export const getProduct = (id: any) => {
  const query = `*[_type == "product" && _id == "${id}"] {
    _id,
    id,
    name,
    image,
    price,
    category
}`;
  return query;
};
