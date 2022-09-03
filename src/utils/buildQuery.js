export const buildQuery = (data) => {
  const query = Object.entries(data).reduce((acc, item, i) => {
    const filter = item[1]
      ? `${i > 0 ? "&" : ""}filter[${item[0]}]=${item[1]}`
      : "";
    return acc + filter;
  }, "?");
  return query;
};
