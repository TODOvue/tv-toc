export const useToc = () => {
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

  return {
    formatId,
    scrollToId
  }
}
