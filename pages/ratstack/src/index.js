import { createApp } from 'vue'

import UserInterface from './components/UserInterface.vue'
import { store } from './store'

import './styles.scss'

const app = createApp(UserInterface)
app.use(store)
app.mount('#user-interface')
