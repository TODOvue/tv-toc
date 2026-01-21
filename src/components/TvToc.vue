<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useToc } from '../composables/useToc.js'

const props = defineProps({
  toc: {
    type: Object,
    required: true
  },
  marker: {
    type: Boolean,
    default: false
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  observerOptions: {
    type: Object,
    default: () => ({})
  }
})

const { scrollToId, activeId, activeParentId, setupObserver, cleanup } = useToc(props.toc?.links || [], props.observerOptions)

const handleClick = (id) => {
  scrollToId(id)
}

const isActive = (id) => {
  return activeId.value === id
}

const isActiveChild = (id) => {
  return activeParentId.value && activeId.value === id
}

const isParentOfActive = (id) => {
  return activeParentId.value === id
}

onMounted(() => {
  setupObserver()
})

onUnmounted(() => {
  cleanup()
})
</script>


<template>
  <nav class="tv-toc">
    <h3 v-if="toc?.title" class="tv-toc-title">{{ toc.title }}</h3>
    <ul class="tv-toc-list">
      <li v-for="link in toc?.links" :key="link.id" class="tv-toc-item">
        <a
          :href="`#${link.id}`"
          class="tv-toc-link"
          :class="{
            [props.activeClass]: isActive(link.id),
            'parent-active': isParentOfActive(link.id),
            'tv-toc-marker': marker && isActive(link.id)
          }"
          @click.prevent="handleClick(link.id)"
        >
          {{ link.text }}
        </a>
        <ul v-if="link.children" class="tv-toc-sublist">
          <li v-for="subLink in link.children" :key="subLink.id" class="tv-toc-subitem">
            <a
              :href="`#${subLink.id}`"
              class="tv-toc-sublink"
              :class="{
                [props.activeClass]: isActive(subLink.id),
                'tv-toc-marker': marker && isActive(subLink.id)
              }"
              @click.prevent="handleClick(subLink.id)"
            >
              {{ subLink.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
