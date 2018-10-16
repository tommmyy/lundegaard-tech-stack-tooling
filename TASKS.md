# Babel
Po každém z kroků pustíme `yarn build` a podíváme se na výstup v `lib`.


0. Seznamte se s projektem. Sestavte projekt a porovnejte výsledek se zdrojovým kódem.
1. Přidáme `@babel/polyfill` do `src/index.js`
2. `@babel/polyfill` v `babel.config.js` nastavíme `useBuiltIns: 'entry'`
3. Nahradíme `babel.config.js` - `useBuiltIns: 'usage'`. Zohledněte varování, které vznikne při kompilaci. \([Dokumentace](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)\)
4. Do nastavení `babel-preset-env` přidáme `ie: '6'`. Proč se výstup změnil? \([Nápověda](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)\)
