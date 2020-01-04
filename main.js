import Vue from 'vue'
import App from './App'
import Json from './json.js'

Vue.config.productionTip = false

App.mpType = 'app'

function api(type) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500);
	})
}

Vue.prototype.$api = api;

const app = new Vue({
    ...App
})
app.$mount()
