# Babel
Po každém z kroků pustíme `yarn build` a podíváme se na výstup v `lib`.

1. Přidáme `@babel/polyfill` do `src/index.js`
2. `@babel/polyfill` nahradíme `babel.config.js` - `useBuiltIns: 'usage'`
3. Do nastavení `babel-preset-env` přidáme `ie: 6`
