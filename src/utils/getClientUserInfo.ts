export const getClientUserInfo = () => {
  const data = localStorage.getItem('userInfo');
  if (data) return JSON.parse(data);
};
