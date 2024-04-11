# Getting Started

In the project directory, you can run:

### `npm install`

and then run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

I also pointed to my own proxy inside of [package.json](https://github.com/jamesalmeida/frontend-take-home/blob/main/package.json) (line 5) to get around CORS issue with making API calls to an outside domain. 

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Gremlin Frontend Take Home Test Requirements

> Build NPM package search tool

- [What we are looking for](#what-we-are-looking-for)
- [Example API request](#example-api-request)
- [Extra Credit](#extra-credit)

The task is to build a search form for npm packages and display a list from the API call payload.

The presented UI should function in a similar way to [npmjs.com search results](https://www.npmjs.com/search?q=react-window). Your design does not have to look exactly like the linked page. We are concerned more about the functionality than styling. With that being said, we are looking for consistency and the use of best practices in whichever way you choose to style the page (UI library, css-in-js, sass, etc.).

**Please fork this repo and then provide us with a link to your forked copy, a codesandbox, etc.**

The GET request should be made to the following endpoint: `https://api.npms.io/v2/search/suggestions?q=${queryString}`

You may use any pattern or library that you find suitable to accomplish this task.

## What we are looking for

- Does it work?
  - User can search for a package
  - Returned list of packages are displayed and linked to their page on npm.
  - Each row should contain at least the package's name and description. Other data is considered bonus and should be added if time allows.
- Does the implementation handle loading and error states?
- Styling should be consistent and make use of best practices.
- Proper use of React APIs.
- Clean, well-commented code. We prefer clarity over cleverness.


## React

You may use whatever patterns and state management you prefer while working on this. The choice of libraries and state management patterns is not as important as a functioning project. 

## Extra Credit

- Include a test suite
- Utilization of latest React APIs
- Implement functionality to fail the API requests on purpose to test error states
  - Could be a fixed position checkbox or overlay with options
- Dynamic theming
- Mobile breakpoints and responsive design

## Expectations

- We think the main task should take about 2 hours
- Please keep a tidy commit history and separate out the commits for the main task and extra credit task

## Example API request

The request

```
https://api.npms.io/v2/search/suggestions?q=react-window
```

Returns

```json
[
  {
    "package": {
      "name": "react-window",
      "scope": "unscoped",
      "version": "1.8.7",
      "description": "React components for efficiently rendering large, scrollable lists and tabular data",
      "keywords": [
        "react",
        "reactjs",
        "virtual",
        "window",
        "windowed",
        "list",
        "scrolling",
        "infinite",
        "virtualized",
        "table",
        "grid",
        "spreadsheet"
      ],
      "date": "2022-04-23T14:22:43.250Z",
      "links": {
        "npm": "https://www.npmjs.com/package/react-window",
        "homepage": "http://react-window.now.sh/",
        "repository": "https://github.com/bvaughn/react-window",
        "bugs": "https://github.com/bvaughn/react-window/issues"
      },
      "author": {
        "name": "Brian Vaughn",
        "email": "brian.david.vaughn@gmail.com",
        "url": "https://github.com/bvaughn/"
      },
      "publisher": {
        "username": "brianvaughn",
        "email": "briandavidvaughn@gmail.com"
      },
      "maintainers": [
        {
          "username": "brianvaughn",
          "email": "briandavidvaughn@gmail.com"
        },
        {
          "username": "mjackson",
          "email": "npm@mjackson.me"
        }
      ]
    },
    "score": {
      "final": 0.7191781278776386,
      "detail": {
        "quality": 0.9372693112538775,
        "popularity": 0.6046811468515499,
        "maintenance": 0.646739808866951
      }
    },
    "searchScore": 1022.8565,
    "highlight": "<em>react</em>-<em>window</em>"
  },
  {
    "package": {
      "name": "react-window-infinite-loader",
      "scope": "unscoped",
      "version": "1.0.8",
      "description": "InfiniteLoader component inspired by react-virtualized but for use with react-window",
      "keywords": [
        "react",
        "reactjs",
        "virtual",
        "window",
        "windowed",
        "list",
        "scrolling",
        "infinite",
        "virtualized",
        "table",
        "grid",
        "spreadsheet"
      ],
      "date": "2022-06-08T18:23:24.830Z",
      "links": {
        "npm": "https://www.npmjs.com/package/react-window-infinite-loader",
        "homepage": "https://github.com/bvaughn/react-window-infinite-loader/",
        "repository": "https://github.com/bvaughn/react-window-infinite-loader",
        "bugs": "https://github.com/bvaughn/react-window-infinite-loader/issues"
      },
      "author": {
        "name": "Brian Vaughn",
        "email": "brian.david.vaughn@gmail.com",
        "url": "https://github.com/bvaughn/"
      },
      "publisher": {
        "username": "brianvaughn",
        "email": "briandavidvaughn@gmail.com"
      },
      "maintainers": [
        {
          "username": "brianvaughn",
          "email": "briandavidvaughn@gmail.com"
        },
        {
          "username": "andrewbeletskiy",
          "email": "andrewbeletskiy@gmail.com"
        }
      ]
    },
    "score": {
      "final": 0.718726945562352,
      "detail": {
        "quality": 0.8464094502755721,
        "popularity": 0.32808736500728325,
        "maintenance": 0.9999243792203749
      }
    },
    "searchScore": 21.057629,
    "highlight": "<em>react</em>-<em>window</em>-infinite-loader"
  }
]
```


