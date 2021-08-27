const dateFormat = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

const getDateOfLastUpdate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  return `${year}-${dateFormat(month)}-${dateFormat(date)}`;
};

export default getDateOfLastUpdate;
