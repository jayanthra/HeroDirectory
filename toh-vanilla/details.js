import heroApi from './service.js'


const heroImage = document.querySelector('.hero-poster')
const heroName = document.querySelector('.title')

const powerStatsEle = {
  combat: document.querySelector('.combat'),
  durability: document.querySelector('.durability'),
  intelligence: document.querySelector('.intelligence'),
  power: document.querySelector('.power'),
  speed: document.querySelector('.speed'),
  strength: document.querySelector('.strength')
}

async function loadHeroes() {

  const params = new URLSearchParams(location.search);
  const id = params.get("id")

  const response = await heroApi.getHeroDetails(id)
  console.log(response)


  heroImage.src = response.image.url
  heroName.textContent = response.name

  let powerStats = response.powerstats
  console.log(powerStats)
  for (let stat in powerStats) {
    if (powerStatsEle.hasOwnProperty(stat)) {
      console.log(powerStatsEle[stat])
      powerStatsEle[stat].style.width = powerStats[stat] + '%'
    }
  }
}

loadHeroes()