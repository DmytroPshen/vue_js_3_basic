const App = {
    data() {
        return {
            // counter: 0,
            placeholderString: 'Внесіть назву нотатки',
            title: 'Список нотаток'
        }
    }
}

// const app = Vue.createApp(App)

// app.mount('#app')
Vue.createApp(App).mount('#app')
