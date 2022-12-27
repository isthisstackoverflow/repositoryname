import './styles.scss'

import UserInterface from './components/UserInterface.vue'

import { store } from './store'

const app = createApp(UserInterface)
app.use(store)
app.mount('#user-interface')
