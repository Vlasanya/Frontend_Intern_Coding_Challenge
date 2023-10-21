<template>
  <form @submit.prevent="searchLocation" class="search-form">
    <input v-model="searchQuery" placeholder="Enter a location" class="search-input" />
    <button type="submit" class="search-button">Search</button>
  </form>
</template>

<script>
export default {
  props: {
    location: String,
  },
  data() {
    return {
      searchQuery: this.location || '',
    }
  },
  watch: {
    location(newLocation) {
      this.searchQuery = newLocation;
    },
  },
  methods: {
    searchLocation() {
      this.$emit('search', this.searchQuery)
    },
  },
}
</script>

<style scoped>
.search-form {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.search-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
