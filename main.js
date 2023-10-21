import Vue from 'vue';
import Vuex from 'vuex';
import storeModule from './store/location'; // Import your Vuex store module

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    location: storeModule, // Register your Vuex store module
  },
});

new Vue({
  store, // Provide the store to your Vue instance
  render: (h) => h(App), // Replace "App" with your root component
}).$mount('#app');
