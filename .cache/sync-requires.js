const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mando/Code/Projects/Gatsby/dev-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/mando/Code/Projects/Gatsby/dev-portfolio/src/pages/index.jsx")))
}

