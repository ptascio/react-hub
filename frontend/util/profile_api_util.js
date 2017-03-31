export const fetchUser = (username) => {
  return $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: `https://api.github.com/users/${username}`,
  });
};

export const fetchRepos = (username) => {
  return $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: `https://api.github.com/users/${username}/repos`
  });
};
