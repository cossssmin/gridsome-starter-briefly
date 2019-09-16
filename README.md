# Briefly

> Minimal blog starter for [Gridsome](https://gridsome.org), based on [Dylan Smith's](https://dylanatsmith.com/) personal website design, and styled with [Tailwind CSS](https://tailwindcss.com).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cossssmin/gridsome-starter-briefly)

## Demo

- [Page](https://gridsome-starter-briefly.netlify.com/about/)
- [Single post](https://gridsome-starter-briefly.netlify.com/getting-started-with-gridsome-and-briefly/)
- [Blog index with filtering](https://gridsome-starter-briefly.netlify.com/)
- [Blog index with pagination](https://gridsome-starter-briefly.netlify.com/paginated/)

## Preview

![Briefly minimal blog starter for Gridsome preview](https://res.cloudinary.com/cossssmin/image/upload/v1559057477/os/gridsome/briefly/briefly-card.png)

## Features

- Sitemap
- RSS Feed
- Google Analytics
- Custom 404 Page
- Code syntax highlighting
- Medium-like image lightbox
- Open Graph meta tags for posts
- Alternative index page: [paginated posts list](https://gridsome-starter-briefly.netlify.com/paginated/)
- Post descriptions: automatic or user-defined
- Easily show post dates in your locale (moment.js)
- _Index page post filtering_: show longer or shorter posts
- Posts show a warning if they're older than 1 year (configurable)

## Installation

It's recommended that you install Briefly with the `gridsome create` command, so that Gridsome removes the `.git` folder and installs NPM dependencies for you: 

```sh 
gridsome create my-website https://github.com/cossssmin/gridsome-starter-briefly.git
```

Alternatively, you can clone this repo and set it up manually:

```sh 
git clone https://github.com/cossssmin/gridsome-starter-briefly.git my-website

# navigate to the directory
cd my-website

# remove the Git folder
rm -rf .git

# install NPM dependencies
npm install
```

## Configuration

See the [configuration notes](https://gridsome-starter-briefly.netlify.com/getting-started-with-gridsome-and-briefly/#configuration) in the Getting Started demo post.

## Development

Run `gridsome develop` to start a local development server, or `gridsome build` to build the static site into the `dist` folder.

See the [Gridsome docs](https://gridsome.org/docs) for more information.
