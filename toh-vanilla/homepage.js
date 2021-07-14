import heroApi from './service.js'

const heroList = document.querySelector('.hero-list')
const searchBox = document.getElementById('search')


async function loadHeroes(key) {
  const response = await heroApi.searchHero(key)
  const heroes = response.results
  heroList.innerHTML = ''
  heroList.innerHTML = heroes.map((item) => {
    return `
    <div class="poster">
      <a href="./details.html?id=${item.id}">
      <div class="img-container">
        <img src="${item.image.url}" alt="">
      </div>
      <div class="details">
        <p>${item.name}</p>
        <div class="curtain"></div>
      </div>
      </a>
    </div>
    `
  }).join('')
}

loadHeroes('man')

let debounce = function (fn, dl) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, dl);
  };
};

const getData = () => {
  loadHeroes(searchBox.value)
}

const search = debounce(getData, 500);
searchBox.addEventListener('keydown', search)
