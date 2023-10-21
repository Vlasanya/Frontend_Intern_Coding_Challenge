export const state = () => ({
  locations: [],
})

export const mutations = {
  setLocations(state, locations) {
    state.locations = locations
  },
}

export const actions = {
  async fetchLocations({ commit }, query) {
    try {
      const response = await this.$axios.get(
        `/api/search?q=${query}&format=json`
      );
      commit('setLocations', response.data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  },
}
