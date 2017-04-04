// make sure to wrap your token in ''
var token = //your token here;

export const fetchRepoIssues = (repo) => {
  return $.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: `https://api.github.com/repos/YOURNAMEHERE/${repo}/issues?callback=testUser&access_token=${token}`,
  });
};

export const createIssue = (repo, data) => {
  return $.ajax({
    url: `https://api.github.com/repos/YOURNAMEHERE/${repo}/issues?callback=testUser&access_token=${token}`,
    method: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  });
};

export const closeRepoIssue = (url, data, name) => {
  return $.ajax({
    url: `${url}?callback=testUser&access_token=${token}`,
    method: 'PATCH',
    data: JSON.stringify(data),
    contentType: 'application/json',
  });
};
