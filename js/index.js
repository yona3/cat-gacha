'use strict';

{
  const url = 'https://aws.random.cat/meow';
  const catImgEl = document.getElementById('cat-img');
  const loadingEl = document.getElementsByClassName('dot-spin')[0];
  const fetchButton = document.getElementsByClassName('fetch-button')[0];

  const fetchCatAPI = () => {
    loadingEl.style.display = 'block';
    catImgEl.style.display = 'none';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        catImgEl.src = data.file;
      });
  };

  // initialize

  (function () {
    fetchCatAPI();
  })();

  // on load image
  catImgEl.addEventListener('load', () => {
    loadingEl.style.display = 'none';
    catImgEl.style.display = 'block';
  });
}
