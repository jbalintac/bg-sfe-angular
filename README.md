# MovieApp

## Overview

A very simple movie listing app. 

## Requirement Checklist

| |Requirement | Notes |
|--|--|--|
| [x] | Angular (6 or higher) | Version: 7.2.0 | 
| [x] | Typescript | Version: 3.2.2  |
| [x] | Rxjs |<ul><li>  Usage of: subscribe, pipe, filter, map, debounceTime, distinctUntilChanged</li><li>Utilized in: movie.service.ts, home.component.ts</li> |
| [x] | Sass | Minimal usage on: <ul><li>Bootstrap 4</li><li>styles-variables.scss</li>  | 
| [x] | List movies |  |
| [x] | Search |  |
| [x] | Nagivate to movie detail |  |
| [x] | Show movie detail |  |
| [x] | Nagivate to back movie list |  |
| [x] | Filter by Genre |  |
| [x] | Redux  | Plain straight redux implementation (app/core/store & home.component.ts) | 
| [ ] | Unit tests  | Todo | 
| [-] | Polished design  |  | 
| [x] | Responsive design  | Utilized Bootstrap responsive utilities on search bar and card |
| [x] | Animations | Utilized on card display transition (home.animation.ts) | 

## Improvement Recommendations

- Create unit tests.
- Add Masonry for the card display.


## Development server

Run `npm install` initially then just `ng serve` subsequent for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm install` initially then just `ng build` subsequent to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
Make sure to have a global webpack installed.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
