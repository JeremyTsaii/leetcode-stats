<h2 align="center">leetcode-stats</h2>
<h3 align="center">The API for generating an aesthetic display badge for your LeetCode profile statistics</h3>

<h3 align="center">Check it out <a href="https://leetcode-stats.vercel.app/">here</a>!</h3>

<p align="center">
  <a href=https://forthebadge.com>
    <img src="https://forthebadge.com/images/badges/built-with-grammas-recipe.svg"></a>
  </br>
  <a href=https://travis-ci.com/JeremyTsaii/leetcode-stats>
    <img src="https://travis-ci.com/JeremyTsaii/leetcode-stats.svg?branch=master"></a>
  <a href=http://hits.dwyl.com/jeremytsaii/leetcode-stats>
    <img alt="HitCount" src=http://hits.dwyl.com/jeremytsaii/leetcode-stats.svg></a>
  <a href=https://david-dm.org/JeremyTsaii/leetcode-stats>
    <img alt="Dependencies" src=https://david-dm.org/JeremyTsaii/leetcode-stats></a>
  <a href="https://david-dm.org/JeremyTsaii/leetcode-stats#info=devDependencies">
    <img alt="DevDependencies" src=https://david-dm.org/JeremyTsaii/leetcode-stats/dev-status.svg></a>
  </br>
  <a href=https://github.com/dwyl/esta/issues>
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a>
  <a href=https://opensource.org/licenses/MIT>
    <img src=https://img.shields.io/badge/License-MIT-yellow.svg></a>
  <a href=https://github.com/prettier/prettier>
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
  </br>
  <a href=https://vercel.com/jeremytsaii/leetcode-stats>
    <img src=./powered-by-vercel.svg></a>
</p>

Backend Repo is [here](https://github.com/JeremyTsaii/leetcode-stats-api).

## How to use?
Simply copy the following markdown and replace `<USERNAME>` and `<THEME>` with your username and chosen theme.

```
[![<USERNAME>'s LeetCode Stats](https://leetcode-stats.vercel.app/api?username<USERNAME>&theme=<THEME>)](https://github.com/JeremyTsaii/leetcode-stats)
```

Alternatively, go to the web app [here](https://leetcode-stats.vercel.app/), type in your username and select your theme, then click "Generate". You can copy the Image URL or Markdown from there.

For the raw SVG, hit the endpoint below (replacing `<USERNAME>` and `<THEME>`)

Invoke URL: `https://leetcode-stats.vercel.app/api?username<USERNAME>&theme=<THEME>`

## Possible Themes (more on the way!)
- Light (default)
- Dark

## Example Displays

Light Mode:

[![jetsai's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=jetsai&theme=Light)](https://github.com/JeremyTsaii/leetcode-stats)

```
[![jetsai's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=jetsai&theme=Light)](https://github.com/JeremyTsaii/leetcode-stats)
```

Dark Mode:

[![jetsai's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=jetsai&theme=Dark)](https://github.com/JeremyTsaii/leetcode-stats)

```
[![jetsai's LeetCode Stats](https://leetcode-stats.vercel.app/api?username=jetsai&theme=Dark)](https://github.com/JeremyTsaii/leetcode-stats)
```

## What is the development workflow?

First clone the repository onto your local machine.
You can then run the following commands:

#### `npm install`

Install all of the depedencies.

#### `npm run start`

Runs the app in the development mode with live updates.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm run format:fix`

Formats the files with Prettier.<br />

#### `npm run lint:fix`

Lints the files with ESLint.<br />

#### `npm run test`

Runs the test suite. Make sure that all tests pass before committing/pushing!<br />

