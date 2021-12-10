import {createApp} from 'vue'
import App from '@/App'
import {Quasar} from 'quasar'
import './quasar.scss'
import '@quasar/extras/material-icons/material-icons.css'

createApp(App)
    .use(Quasar, {
        config: {},
        plugins: {}
    })
    .mount('#app')
