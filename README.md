# Markup of the landing page lesson

## Getting started

#### Step 1. Clone the repository

```
git clone git@github.com:brezzhnev/markup-landing-page.git
```

#### Step 2. Install Grunt task runner and project dependencies

It will merge your SASS files and transform them to regular CSS. Additionally, it will optimize your static assets (styles, images, HTML).

```
npm install -g grunt
npm install
```

## Requirements

- Implement a markup of the page using HTML5, SASS, with the best modern practices
- Implement hover effects, navigation with animations
- Use `git` and commit every more less significant change
- Understand and extend `Grunt` functionality, make [minification](https://github.com/gruntjs/grunt-contrib-htmlmin), [uglification](https://github.com/gruntjs/grunt-contrib-uglify) 
- Use [Sassy](http://www.sassysass.com/), [Compass](http://www.sassysass.com/), [Normalize.css](https://necolas.github.io/normalize.css/)

## Materials

- CSS/SASS style guides / best practices:
  - https://github.com/airbnb/css
  - https://codeguide.co/
- HTML style guides / best practices:
  - https://gist.github.com/ryansechrest/8693303

## Commands

Run the development mode.

It will run a development server. After each update it will update the page automatically.

```
grunt
```

Make a build:

```
grunt build
```