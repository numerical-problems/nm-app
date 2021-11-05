export const useTextChange = (setState) => {
  return (field) => (e) => {
    setState((old) => ({
      ...old,
      [field]: e.target.value,
    }));
  };
};
