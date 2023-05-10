# e-culture contributing guide

In this guide you will get an overview of the contribution workflow, to get you started developing.

## Table of contents

<!-- TOC -->
* [e-culture contributing guide](#e-culture-contributing-guide)
  * [Table of contents](#table-of-contents)
  * [Overview of the project](#overview-of-the-project)
    * [Front-end](#front-end)
    * [Back-end](#back-end)
    * [Static content hosting](#static-content-hosting)
    * [Data hosting](#data-hosting)
  * [Recommended IDE Setup](#recommended-ide-setup)
  * [Getting started](#getting-started)
    * [Cloning the repository](#cloning-the-repository)
    * [Moving to the cloned repository](#moving-to-the-cloned-repository)
    * [Installing the project dependencies](#installing-the-project-dependencies)
  * [Development](#development)
    * [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    * [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)
    * [Lint with ESLint](#lint-with-eslint)
    * [Formatting with Prettier](#formatting-with-prettier)
    * [Type-Check](#type-check)
  * [Deployment](#deployment)
<!-- TOC -->

## Overview of the project

### Front-end

The framework [Vue.js](https://vuejs.org/) is used for the front-end.

The CSS library [DoodleCSS](https://chr15m.github.io/DoodleCSS/) is used for the styling.

### Back-end

The app is client-only, hosted on [GitHub pages](https://pages.github.com/).

### Static content hosting

All the static content is hosted on [GitHub](https://github.com/).

### Data hosting

The database is a [Firebase](https://firebase.google.com/).

## Recommended IDE Setup

Vue.js's recommended IDE Setup is [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

I personally use [WebStorm](https://www.jetbrains.com/webstorm/).

## Getting started

### Cloning the repository

```sh
git clone git@github.com:le-chartreux/e-culture.git
```

### Moving to the cloned repository

```sh
cd e-culture
```

### Installing the project dependencies

[Node.js](https://nodejs.org/en) is required.

```sh
npm install
```

## Development

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Formatting with [Prettier](https://prettier.io/)

```sh
npm run format
```

### Type-Check

```sh
npm run type-check
```

## Deployment

```sh
npm run deploy
```

