import type { App, Plugin } from 'vue'
import _TvToc from './components/TvToc.vue'
import './style.scss'

const TvToc = _TvToc as typeof _TvToc & Plugin;
TvToc.install = (app: App) => {
  app.component('TvToc', TvToc)
};

export { TvToc }

export const TvTocPlugin: Plugin = {
  install: TvToc.install
};
export default TvToc;

declare module 'vue' {
  export interface GlobalComponents {
    TvToc: typeof TvToc;
  }
}
