const getDateOfLastUpdate = (): string => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};

export default getDateOfLastUpdate;
