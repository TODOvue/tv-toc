import { createApp } from 'vue'
import TvToc from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvToc)
app.mount('#tv-toc')
