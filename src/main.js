import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'

import Flutterwave from 'vue-flutterwave'

createApp(App).use(Flutterwave, { publicKey: 'FLWPUBK-6d8b6da5d1b82f3e917119b68c001319-X' })
createApp(App).mount('#app')
