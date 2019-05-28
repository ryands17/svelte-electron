[Svelte](https://svelte.dev) + [Webpack](https://webpack.js.org/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly compiles Svelte in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

You can use any of the deployment sites like

- [Netlify](https://www.netlify.com/)
- [Surge](https://surge.sh/)
- [Now](https://zeit.co/now/)

### Adding environment variables

For adding environment variables, you can create a copy of the `.env.example` file,
rename it to .env and then add your own variables. Will add support for multiple .env files soon

Todos:

- [ ] Add Navbar component for route navigation
- [ ] Import component based .svelte files dynamically (add a loader as well)
- [x] ~~Add environment variables support~~
- [ ] Add emotion based styling (enhancement)
- [ ] Add multiple environment files (.env.development, .env.production)
