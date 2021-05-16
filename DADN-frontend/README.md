5TML - Smart Building System

## Workflow

This product is built using the following widely used technologies:

- React.js front-end library
- Bootstrap 5 CSS Framework
- Sass preprocessing language
- NPM & Yarn

### Using Yarn

3. Make sure you have [Yarn](https://yarnpkg.com/) installed.
4. After installing `yarn`, open a terminal and run `yarn install` in the main volt folder to download all project dependencies.

```
yarn install
```

5. Then start the app in development mode by running the following command in terminal:

```
yarn start
```

6. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

7. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
yarn build
```

### Using NPM

3. Make sure you have [Node.js](https://nodejs.org/en/) installed. Make sure the installed Node version is >= 8.10 and of npm >= 5.6

4. After installing Node.js, open a terminal and run `npm install` in the main `volt-react-dashboard/` folder to download all project dependencies. You'll find them in the `node_modules/` folder.

```
npm install
```

5. Then start the app in development mode by running the following command in terminal:

```
npm run start
```

6. Open http://localhost:3000 to view it in the browser. Any changes you make to the code will be automatically reflected in the browser.

7. If you want to generate the production files, change the `homepage` value from the `package.json` to the domain name that the app will be hosted on, and then run the following command in the terminal:

```
npm run build
```

## Documentation

Every component, plugin and getting started is thoroughly documented on our [online documentation](https://demo.themesberg.com/volt-react-dashboard/#/documentation/quick-start).

## File Structure

Within the download you'll find the following directories and files:

```
Volt React Dashboard
.
├── LICENSE.md
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── browserconfig.xml
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── mstile-150x150.png
│   ├── robots.txt
│   ├── safari-pinned-tab.svg
│   └── site.webmanifest
├── src
│   ├── assets
│   │   ├── img
│   │   └── syntax-themes
│   ├── components
│   │   ├── AccordionComponent.js
│   │   ├── Charts.js
│   │   ├── Code.js
│   │   ├── CodeEditor.js
│   │   ├── Documentation.js
│   │   ├── Footer.js
│   │   ├── Forms.js
│   │   ├── Navbar.js
│   │   ├── Preloader.js
│   │   ├── Progress.js
│   │   ├── ScrollToTop.js
│   │   ├── Sidebar.js
│   │   ├── Tables.js
│   │   └── Widgets.js
│   ├── data
│   │   ├── charts.js
│   │   ├── commands.js
│   │   ├── features.js
│   │   ├── notifications.js
│   │   ├── pages.js
│   │   ├── tables.js
│   │   ├── teamMembers.js
│   │   └── transactions.js
│   ├── index.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── Presentation.js
│   │   ├── Settings.js
│   │   ├── Transactions.js
│   │   ├── components
│   │   ├── dashboard
│   │   ├── documentation
│   │   ├── examples
│   │   └── tables
│   ├── routes.js
│   └── scss
│       ├── volt
│       └── volt.scss
└── yarn.lock

```
