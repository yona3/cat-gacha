'use strict';

import './style/reset.css';
import './style/style.css';
import './style/three-dots.css';

// html
document.querySelector('#app').innerHTML = `
  <header>
    <h1>ねこガチャ</h1>
    <img
      width="50px"
      height="50px"
      src="/assets/favicon.5a12b885.ico"
      alt="肉球"
    />
  </header>
  <main>
    <div class="wrapper">
      <p class="description">ねこの画像をランダムで表示します。</p>
      <div class="img-container">
        <div class="dot-spin"></div>
      </div>
      <button class="fetch-button">
        <img
          width="50px"
          height="50px"
          src="/assets/favicon.5a12b885.ico"
          alt="肉球"
        />
      </button>
    </div>
  </main>
  <footer>
    <p>
      つくったひと:
      <a
        href="https://twitter.com/js_yona"
        target="_blank"
        rel="noopener noreferrer"
        >yona
      </a>
    </p>
  </footer>
`;

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
