var token = //your token here ;

export const fetchUser = () => {
  return $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: `https://api.github.com/users/YOURNAMEHERE?callback=testUser&access_token=${token}`,
  });
};

export const fetchRepos = () => {
  return $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: `https://api.github.com/users/YOURNAMEHERE/repos?callback=testUser&access_token=${token}`
  });
};
