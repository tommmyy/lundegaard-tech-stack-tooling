import '@babel/polyfill';

const hello = () => 'Hello';

Promise.resolve().then(hello);
