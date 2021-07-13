import heroApi from './service.js'

const heroList = document.querySelector('.hero-list')

async function loadHeroes() {
  const response = await heroApi.getHeroList()
  const heroes = response.results

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

loadHeroes()