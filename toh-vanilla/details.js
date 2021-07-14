import heroApi from './service.js'

const heroImage = document.querySelector('.hero-poster')
const heroName = document.querySelector('.title')

const bioInfo = document.querySelector('.bio-info')
const workInfo = document.querySelector('.work-info')
const connectionInfo = document.querySelector('.connection-info')
const appearanceInfo = document.querySelector('.appearance-info')

const powerStatsEle = {
  combat: document.querySelector('.combat'),
  durability: document.querySelector('.durability'),
  intelligence: document.querySelector('.intelligence'),
  power: document.querySelector('.power'),
  speed: document.querySelector('.speed'),
  strength: document.querySelector('.strength')
}



function updateBio(infoSection, data) {
  infoSection.innerHTML = ''
  let infoList = []

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      if(key === 'alignment') {
        if(data[key] === 'bad') {
          data[key] += '😈'
        } else {
          data[key] += '😇'
        }
        
      }
      let item = `
      <li class="prop">
        <p class="key">${key.replace('-', ' ')}</p>
        <p class="value">${data[key]}</p>
      </li>
      `
      infoList.push(item)
    }
  }
  infoSection.innerHTML = infoList.join('')
}

async function loadHeroes() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id")
  const response = await heroApi.getHeroDetails(id)
  heroImage.src = response.image.url
  heroName.textContent = response.name

  let powerStats = response.powerstats
  for (let stat in powerStats) {
    if (powerStatsEle.hasOwnProperty(stat)) {
      console.log(powerStatsEle[stat])
      powerStatsEle[stat].style.width = powerStats[stat] + '%'
    }
  }
 
  updateBio(bioInfo, response.biography)
  updateBio(appearanceInfo, response.appearance)
  updateBio(workInfo, response.work)
  updateBio(connectionInfo, response.connections)
}

loadHeroes()