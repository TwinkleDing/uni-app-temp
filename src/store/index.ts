import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';
import picture from './modules/picture';

Vue.use(Vuex);

const store = new Vuex.Store({
	getters,
	modules: {
		user,
		picture
	}
})

export default store
