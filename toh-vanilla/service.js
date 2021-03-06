const BASE_URL = 'http://localhost:3004/api/v1/hero'

export default {
  async searchHero(searchTerm) {
    let resp = await fetch(`${BASE_URL}/search/${searchTerm}`)
    let json = await resp.json()
    return json
  },

  async getHeroDetails(id) {
    let resp = await fetch(`${BASE_URL}/details/${id}`)
    let json = await resp.json()
    return json
  },

}