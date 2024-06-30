require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  "login": "Kk1284",
  "id": 97325776,
  "node_id": "U_kgDOBc0S0A",
  "avatar_url": "https://avatars.githubusercontent.com/u/97325776?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kk1284",
  "html_url": "https://github.com/Kk1284",
  "followers_url": "https://api.github.com/users/Kk1284/followers",
  "following_url": "https://api.github.com/users/Kk1284/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kk1284/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kk1284/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kk1284/subscriptions",
  "organizations_url": "https://api.github.com/users/Kk1284/orgs",
  "repos_url": "https://api.github.com/users/Kk1284/repos",
  "events_url": "https://api.github.com/users/Kk1284/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kk1284/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kritik Kalra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-01-08T03:36:35Z",
  "updated_at": "2024-06-30T17:01:58Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send("kritikkalra")
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai and code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
