[Svelte](https://svelte.dev) + [Webpack](https://webpack.js.org/) + [Electron](https://electronjs.org/)

## Available Scripts

In the project directory, you can run:

### `npm run electron-dev`

Runs the electron app in the development mode.<br>
The Electron app will open automatically.

**Note:** Linux users if you're getting an error it's likely you need to follow [this issue](https://github.com/electron/electron/issues/17972)

The app will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run electron-pack`

Will be added soon (via `electron-builder`)

### Adding environment variables

For adding environment variables, you can create a copy of the `.env.example` file,
rename it to .env and then add your own variables. Will add support for multiple .env files soon

Todos:

- [x] ~~Add Navbar component for route navigation~~
- [x] ~~Add environment variables support~~
- [x] ~~Import component based .svelte files dynamically (add a loader as well)~~
- [ ] Add emotion based styling (enhancement)
