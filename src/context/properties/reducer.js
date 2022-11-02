export const reducer = (state, { type, pyload }) => {
  switch (type) {
    case 'refetch':
      return { ...state, refetch: pyload };
    default:
      return state;
  }
};
