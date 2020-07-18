import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        todoList: [],
    },
    getters: {
        todoList: state => state.todoList
    },
    mutations: {
        addRow(state, row) {
            state.todoList.push(row)
        },
        delRow(state, index) {
            state.todoList.splice(index, 1)
        }
    },
   actions: {
        addRow({commit}, row) {
            commit('addRow', row)
        },
        delRow({commit}, index) {
            commit('delRow', index)
        },
    }
})

new Vue({
    render: h => h(App),
    store: store
}).$mount('#app')
