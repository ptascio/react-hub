export const fetchUser = () => {
  return $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: 'https://api.github.com/users/ptascio',
  });
};
