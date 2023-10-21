<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-deprecated-v-bind-sync -->

<template>
  <div class="container">
    <LocationSearchForm @search="fetchLocations" :location.sync="searchQuery" />
    
    <div class="suggested-locations">
      <button v-for="suggestedLocation in suggestedLocations" :key="suggestedLocation" @click="selectSuggestedLocation(suggestedLocation)" class="suggested-location">
        {{ suggestedLocation }}
      </button>
    </div>

    <div v-for="location in locations" class="search-result">
      <div v-if="location">
        <h2>{{ location.display_name }}</h2>
        <p v-if="location.lon">Longitude: {{ location.lon }}</p>
        <p v-if="location.lat">Latitude: {{ location.lat }}</p>
      </div>  
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
      suggestedLocations: ['New York', 'Los Angeles', 'San Francisco'],
    }
  },
  computed: {
     ...mapState('location', {
      locations: (state) => state.locations,
  }),
  },
  methods: {
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
    selectSuggestedLocation(location) {
      this.searchQuery = location;
      this.fetchLocations(location);
    },
  },
}
</script>


<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.suggested-locations {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.suggested-location {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

.search-result {
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}
</style>
