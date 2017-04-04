# ReactHub
Welcome to ReactHub! We believe that issues are important so we built a site exclusively devoted to viewing, creating, and closing them. Our UI is simple, and getting started will just take a few minutes. So without further ado, let's get started to you can deal with your issues and make your projects even awesomer than they are now!

## Setting Up ReactHub

## Clone
1. Navigate to the repository you'd like to house ReactHub in.
2. In your terminal run the following command:
```
  git clone https://github.com/ptascio/react-hub.git
```
3. CD into ReactHub and open the files in your favorite text editor.

## Auth Token
At ReactHub we take advantage of GitHub's super friendly API. In order to use ReactHub you need to generate an AuthToken but don't worry, GitHub makes this simple.
1. Visit https://github.com/settings/tokens/new. You'll probably be prompted for your password (and possibly username).
2. On the menu to the right scroll down to the bottom and click on Personal access tokens.
3. Fill in the Token description, then click Generate token at the bottom of the page.
4. As GitHub will tell you, keep this token in a safe place! We recommend copy and pasting it to a file on your machine.

## Using Your Auth Token
Okay great! Now there are 2 places you'll need to place your tokens in order to make those ajax calls we all love.
### profile_api_util
1. Go to ```frontend/util/profile_api_util```.
2. Paste your token where it says:
 ``` javascript
 var token = //your token here
 ```
3. Replace ```YOURNAMEHERE``` with your GitHub profile name in the urls of the ```fetchUser``` and ```fetchRepos``` functions.
``` javascript
url: `https://api.github.com/users/YOURNAMEHERE?callback=testUser&access_token=${token}`
```
### issues_api_util
1. Go to ```frontend/util/profile_api_util```
2. Paste your token where it says:
 ``` javascript
 var token = //your token here
 ```
 3. Replace ```YOURNAMEHERE``` with your GitHub profile name in the urls of the ```fetchRepoIssues``` and ```createIssue``` functions.
 ``` javascript
 url: `https://api.github.com/repos/YOURNAMEHERE/${repo}/issues?callback=testUser&access_token=${token}`,
 ```

## NPM
Back in the terminal, run ```npm install```. When all the packages have loaded run ```npm start```.

## Visit ReacHub
Back in your browser visit ```http://localhost:8080/#/```. You should see your profile picture and your GitHub repos. Click on one of your repos to see its issues.
![react-hub](/docs/demopics/profile.png)

## Closing Issues
So you've worked hard and finally resolved that issue! Congrats! Hover over the issues and click. That's it. You're issue is officially closed!
![react-hub](/docs/demopics/closeIssue.png)
## Create An Issue
We get it, you want to make your site as cool as possible. Create an issue by filling in the title and body of the create issue form, then click ```Create Issue```.
![react-hub](/docs/demopics/createIssue.png)
## Thank You!
Thank you for using ReactHub! We hope you enjoyed using it as much as we enjoyed making it. Stay tuned for features to come! Some issues we are addressing are:
* Reopen Closed Issues
* Edit Existing Issues
* OAuth2 authorization
