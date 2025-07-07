require('dotenv').config()
const express = require('express')
const app = express()

const github = {
  "login": "AmanV07",
  "id": 84333633,
  "node_id": "MDQ6VXNlcjg0MzMzNjMz",
  "avatar_url": "https://avatars.githubusercontent.com/u/84333633?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AmanV07",
  "html_url": "https://github.com/AmanV07",
  "followers_url": "https://api.github.com/users/AmanV07/followers",
  "following_url": "https://api.github.com/users/AmanV07/following{/other_user}",
  "gists_url": "https://api.github.com/users/AmanV07/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AmanV07/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AmanV07/subscriptions",
  "organizations_url": "https://api.github.com/users/AmanV07/orgs",
  "repos_url": "https://api.github.com/users/AmanV07/repos",
  "events_url": "https://api.github.com/users/AmanV07/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AmanV07/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": "Haridwar",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-05-17T14:34:50Z",
  "updated_at": "2025-02-11T11:33:30Z"
}

app.get('/', (req, res) => {
  console.log('GET request received at /')
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    console.log('GET request received at /twitter')
    res.send('hellooo')
})
app.get('/github', ( req, res)=>{
  res.json(github)

})
app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`)
 })
