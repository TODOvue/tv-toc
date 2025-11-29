
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-toc',
    configKey: 'tvToc'
  },
  setup(_options, nuxt) {
    const cssPath = '@todovue/tv-toc/style.scss';
    if (!nuxt.options.css.includes(cssPath)) {
      nuxt.options.css.push(cssPath);
    }
  }
})
