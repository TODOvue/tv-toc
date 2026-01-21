import { ref } from 'vue'

export const useToc = (tocLinks = [], observerOptions = {}) => {
  const activeId = ref(null)
  const activeParentId = ref(null)
  let observer = null

  const formatId = (id) => {
    return `#${id}`
  }

  const scrollToId = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      history.pushState(null, null, `#${id}`)
    }
  }

  const getAllIds = (links) => {
    const ids = []
    links.forEach(link => {
      ids.push({ id: link.id, parentId: null })
      if (link.children) {
        link.children.forEach(child => {
          ids.push({ id: child.id, parentId: link.id })
        })
      }
    })
    return ids
  }

  const setupObserver = () => {
    if (typeof window === 'undefined' || !tocLinks.length) return

    const allIds = getAllIds(tocLinks)
    const elements = allIds
      .map(({ id }) => document.getElementById(id))
      .filter(el => el !== null)

    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const linkInfo = allIds.find(item => item.id === id)

            if (linkInfo) {
              activeId.value = id
              activeParentId.value = linkInfo.parentId
              history.replaceState(null, null, `#${id}`)
            }
          }
        })
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
        ...observerOptions
      }
    )

    elements.forEach(element => observer.observe(element))
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return {
    formatId,
    scrollToId,
    activeId,
    activeParentId,
    setupObserver,
    cleanup
  }
}
