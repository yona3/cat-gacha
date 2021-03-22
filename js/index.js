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

  // set screen height
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.height = `${window.outerHeight}px`;
  });

  // events

  fetchButton.addEventListener('mousedown', () => {
    fetchButton.style.position = 'relative';
    fetchButton.style.top = '2px';
    fetchButton.style.boxShadow = '0 1px 1px 1px rgba(0, 0, 0, 0.05)';
    fetchCatAPI();
  });

  fetchButton.addEventListener('mouseup', () => {
    fetchButton.style.boxShadow = '0 2px 2px 2px rgba(0, 0, 0, 0.05)';
    fetchButton.style.top = '0px';
  });

  // on load image
  catImgEl.addEventListener('load', () => {
    loadingEl.style.display = 'none';
    catImgEl.style.display = 'block';
  });
}
