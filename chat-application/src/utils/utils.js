export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 10);
};
