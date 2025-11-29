import { createApp } from 'vue'
import { TvDemo } from '@todovue/tv-demo'
import TvToc from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import './style.scss'

const app = createApp(TvToc)
app.component('TvDemo', TvDemo)
app.mount('#tv-toc')
