<p align="center">
  <img src="https://raw.githubusercontent.com/interaminense/boilerplate/master/utils/logo.png">
</p>

![version](https://img.shields.io/badge/boilerplate-1.0-4278ff.svg) [![license](https://img.shields.io/github/license/interaminense/boilerplate.svg)](./license.md) 


This **boilerplate** was built in order to aid in the process of creating static applications.

I use:

* NPM Scripts
* GulpJS
* Sass
* Browsersync

## Getting Started

Install NodeJS and GulpJS

```
# Clone this repository
$ git clone git@github.com:interaminense/boilerplate.git

# install dependencies
$ npm install --save-dev
```

## Folders and Files

```
├── README.md
├── app
│   ├── css
│   │   └── main.css
│   ├── fonts
│   ├── images
│   ├── js
│   │   ├── lib
│   │   └── main.js
│   ├── scss
│   │   ├── library
│   │   │   ├── components
│   │   │   ├── settings
│   │   │   │   ├── _app.scss
│   │   │   │   ├── _colors.scss
│   │   │   │   ├── _typography.scss
│   │   │   │   └── _variables.scss
│   │   ├── vendor
│   │   └── main.scss
│   ├── main.html
└── dist
    ├── css
    │   └── style.min.css
    ├── js
    │   └── main.min.js
    └── main.min.js
```

## Tasks

* `gulp`: start the project
* `gulp clean:dist`: remove the folder dist
* `gulp build`: build the folder dist
