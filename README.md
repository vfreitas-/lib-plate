# Library Bolierplate

A simple bolierplate for JavaScript libraries including Rollup, Buble(for ES6), ESLint, Mocha, Karma and test code Coverage with Istanbul

## Table of Contents

-   [Usage](#usage)
-   [Contribute](#contribute)


## Usage

Clone it and change both, `package.json` and `rollup.config.js` with the name of your library. Look for {{libraryname}}, {{reponame}} and {{username}} and update them with your info.
Don't forget to update your package.json with your github data as well! And you may use the example readme to detail you library too.

To build your library use the following commands after running `npm install`:

`npm start` - To build and watch your files for development
`npm run build && npm run build:minify` - To build your files for production
`npm test` - To run your tests once (for Travis or other CI tools)
`npm run test:w` - To run and watch your tests (development)
`npm run docs` - To generate a documentation on the API section of your readme
`npm run release` - To release a npm version of your package (Make sure to change the version on the package.json file first!)

## Contribute

All contributions are welcome.

- Fork the repo on GitHub
- Clone the project to your own machine
- Make your changes
- Commit it to your own branch
- Push your work back up to your fork
- Submit a pull request with full remarks documenting your changes

