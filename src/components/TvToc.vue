<script setup>
import { onMounted, onUnmounted, ref, computed, watch } from 'vue'
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
  },
  collapsible: {
    type: Boolean,
    default: false
  }
})

const { scrollToId, activeId, activeParentId, setupObserver, cleanup } = useToc(props.toc?.links || [], props.observerOptions)

const expandedIds = ref(new Set())

const toggle = (id) => {
  const newSet = new Set(expandedIds.value)
  if (newSet.has(id)) {
    newSet.delete(id)
  } else {
    newSet.add(id)
  }
  expandedIds.value = newSet
}

const isExpanded = (id) => {
  return !props.collapsible || expandedIds.value.has(id)
}

const handleClick = (id) => {
  scrollToId(id)
}

const isActive = (id) => {
  return activeId.value === id
}

const isParentOfActive = (id) => {
  return activeParentId.value === id
}

watch(activeParentId, (newId) => {
  if (props.collapsible && newId && !expandedIds.value.has(newId)) {
    const newSet = new Set(expandedIds.value)
    newSet.add(newId)
    expandedIds.value = newSet
  }
})

const scrollProgress = ref(0)

const flatIds = computed(() => {
  const ids = []
  const traverse = (items) => {
    if (!items) return
    for (const item of items) {
      ids.push(item.id)
      if (item.children) traverse(item.children)
    }
  }
  traverse(props.toc?.links)
  return ids
})

watch(activeId, (newId) => {
  if (!newId) return
  const index = flatIds.value.indexOf(newId)
  if (index !== -1) {
    const total = flatIds.value.length
    if (total > 0) {
      scrollProgress.value = ((index + 1) / total) * 100
    }
  }
}, { immediate: true })

onMounted(() => {
  if (props.collapsible) {
     if (activeParentId.value) {
        toggle(activeParentId.value)
     }
  }
  setupObserver()
})

onUnmounted(() => {
  cleanup()
})
</script>

<template>
<nav class="tv-toc">
    <div class="tv-toc-progress-container" v-if="toc?.links?.length">
      <div
        class="tv-toc-progress-bar"
        :style="{ height: `${scrollProgress}%` }"
      ></div>
    </div>
    <h3 v-if="toc?.title" class="tv-toc-title">{{ toc.title }}</h3>
    <ul class="tv-toc-list">
      <li v-for="link in toc?.links" :key="link.id" class="tv-toc-item">
        <div class="tv-toc-item-content">
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
          <button
            v-if="collapsible && link.children && link.children.length"
            class="tv-toc-toggle"
            :class="{ 'is-expanded': isExpanded(link.id) }"
            @click.stop="toggle(link.id)"
            aria-label="Toggle section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <div
          v-if="link.children"
          class="tv-toc-sublist-wrapper"
          :class="{ 'is-collapsed': collapsible && !isExpanded(link.id) }"
          :style="collapsible ? { '--content-height': isExpanded(link.id) ? '1000px' : '0px' } : {}"
        >
          <ul class="tv-toc-sublist">
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
        </div>
      </li>
    </ul>
  </nav>
</template>
