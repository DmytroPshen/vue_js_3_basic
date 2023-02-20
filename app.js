const App = {
    data() {
        return {
            counter: 55,
            // title: {}
            title: 'Лічильник'
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')
// Vue.createApp(App).mount('#app')
