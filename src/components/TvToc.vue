<script setup>
import { useToc } from '../composables/useToc.js'

defineProps({
  toc: {
    type: Object,
    required: true
  }
})

const { scrollToId } = useToc()

const handleClick = (id) => {
  scrollToId(id)
}
</script>


<template>
  <nav class="tv-toc">
    <h3 v-if="toc?.title" class="tv-toc-title">{{ toc.title }}</h3>
    <ul class="tv-toc-list">
      <li v-for="link in toc?.links" :key="link.id" class="tv-toc-item">
        <a :href="`#${link.id}`" class="tv-toc-link" @click.prevent="handleClick(link.id)">
          {{ link.text }}
        </a>
        <ul v-if="link.children" class="tv-toc-sublist">
          <li v-for="subLink in link.children" :key="subLink.id" class="tv-toc-subitem">
            <a :href="`#${subLink.id}`" class="tv-toc-sublink" @click.prevent="handleClick(subLink.id)">
              {{ subLink.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
