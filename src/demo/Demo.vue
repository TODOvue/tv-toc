<script setup>
import { defineAsyncComponent } from 'vue'
import { demos } from './utils/mocks.js'

const TvToc = defineAsyncComponent(/* webpackChunkName: "tvToc" */() => import('../components/TvToc.vue'))
</script>

<template>
  <TvDemo
    :component="TvToc"
    :variants="demos"
    hide-background
    component-name="TvToc"
    npm-install="@todovue/tv-toc"
    source-link="https://github.com/TODOvue/tv-toc"
    url-clone="https://github.com/TODOvue/tv-toc.git"
    version="1.1.0"
  />
</template>

<style scoped>

</style>
