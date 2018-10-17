const rootEl = document.getElementById('root');

const renderImage = (src) => {
	const img = document.createElement('img');
	img.setAttribute('src', src);

	rootEl.appendChild(img);
};

fetch('https://api.thecatapi.com/v1/images/search?format=json')
	.then((response) => response.json())
	.then((json) => renderImage(json[0].url))
	.catch((err) => console.error(err));
