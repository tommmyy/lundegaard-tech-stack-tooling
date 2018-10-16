# Babel
Po každém z kroků pustíme `yarn build` a podíváme se na výstup v `lib`.

1. Přidáme `@babel/polyfill` do `src/index.js`
2. `@babel/polyfill` nahradíme `babel.config.js` - `useBuiltIns: 'usage'`
3. Do nastavení `babel-preset-env` přidáme `ie: 6`

# ES6

Než začneme:

- Checkoutněme větev `git checkout es6`
- Prohlédněte si `webpack.config.js`
- Pro vývoj následujících úkol§ spusťte `yarn start`

4. Refaktorujte kód v `src/index.js` do ES6+. Kód by měl obsahovat následující:
	- `let` a `const` - `let` by měl být třeba jen jednou
	- Arrow funkce - snažte se použít nejkratší syntaktickou variantu
	- Zkrácenou syntaxy object literálu
	- Objektovou destrukturalizaci - `renderUserList`
	- Template literály s tagy - `renderUserList` (pomůže i spread operátor)
	- Rest operátor - `createState`

5. Rozdělte soubor do více souborů pomocí ES6 modulů.
	- Zbavte se `window.APP`
	- Veškeré pomocné funkce by měly mít vlastní soubor ve složce `utils`
	- Veškeré funkce pro render aplikace a správu stavu by měli mít vlastní soubor ve složce `core`
	- v `src/index.js` by měla zůstat pouze iniciace stavu aplikace a volání renderu.