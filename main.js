'use strict';

import './style/reset.css';
import './style/style.css';
import './style/three-dots.css';

{
  const url = 'https://aws.random.cat/meow';
  const ImageContainer = document.querySelector('.img-container');
  const catImgEl = document.createElement('img');
  const loadingEl = document.getElementsByClassName('dot-spin')[0];
  const fetchButton = document.getElementsByClassName('fetch-button')[0];

  const fetchCatAPI = async () => {
    loadingEl.style.display = 'block';
    catImgEl.style.display = 'none';

    const res = await fetch(url);
    const data = await res.json();
    catImgEl.src = data.file;
  };

  // initialize

  (() => {
    fetchCatAPI();
    ImageContainer.appendChild(catImgEl);
  })();

  // event listeners

  fetchButton.addEventListener('mousedown', fetchCatAPI);

  // on load image
  catImgEl.addEventListener('load', () => {
    loadingEl.style.display = 'none';
    catImgEl.style.display = 'block';
  });
}
