# Babel + Webpack

Přečtěte si `README.md`.

**V tuto chvíli je projekt nefunkční a je třeba ho nakonfigurovat.**

## Úkoly

0. Seznamte se změnami v `package.json`. Které závislosti přibyly?
1. Seznam se s `webpack.config.js`. Přidej `html-webpack-plugin` jako DEV dependency do projektu. Následně nakonfiguruj webpack tak, aby používal plugin se šablonou ze `src/assets/index.html`.
Spusť projekt v DEV režimu (viz README.md) a zjisti jestli výsledný dokument renderuje text "Hello world".
2. Zjednoduš šablonu tak, že bude obsahovat pouze `div#root`.
3. Přepiš kód tak, aby prováděl následující:
	- Pomocí funkce `fetch` si načti náhodnou fotografii kočky z 'https://api.thecatapi.com/v1/images/search?format=json'.
	- Výsledek je Promise, v případě chyby odchytni a vypiš chybu pomocí `console.error`.
	- V případě úspěšného requestu vyparsuj JSON.
	- Z JSON přešti URL. Následně vytvoř DOM element <img> a obrázek vyrenderuj.
	- Při každém reloadu stránky bude vyobrazena jiná fotografie kočky.
4. Sestav projekt (viz README.md), podívej se na výstup. Zkus optimalizovat velikost bundle pomocí `babel.config.js`.


## Hinty

- Práce s Yarn:
	- [Přídání DEV dependency](https://yarnpkg.com/lang/en/docs/cli/add/#toc-yarn-add-dev-d)
- Práce s DOMem. Googluj:
	- document.getElementById,
	- document.createElement,
	- element.setAttribute
- [Práce s `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)