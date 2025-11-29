<template>
  <TvToc
    :toc="toc"
  />
</template>

<script setup>
import { TvToc } from '@todovue/tv-toc'
import '@todovue/tv-toc/style.css'

const toc = {
  "title": "Table of Contents",
  "searchDepth": 2,
  "depth": 2,
  "links": [
    {
      "id": "what-is-todovue",
      "depth": 2,
      "text": "What is TODOvue?"
    },
    {
      "id": "the-first-component-tvarticle",
      "depth": 2,
      "text": "The First Component: TvArticle",
      "children": [
        {
          "id": "key-features",
          "depth": 3,
          "text": "Key Features"
        },
        {
          "id": "usage-example",
          "depth": 3,
          "text": "Usage Example"
        }
      ]
    },
    {
      "id": "why-another-component-library",
      "depth": 2,
      "text": "Why Another Component Library?",
      "children": [
        {
          "id": "different-philosophy",
          "depth": 3,
          "text": "Different Philosophy"
        }
      ]
    },
    {
      "id": "the-road-ahead",
      "depth": 2,
      "text": "The Road Ahead"
    },
    {
      "id": "join-the-journey",
      "depth": 2,
      "text": "Join the Journey"
    },
    {
      "id": "next-steps",
      "depth": 2,
      "text": "Next Steps"
    }
  ]
}
</script>
