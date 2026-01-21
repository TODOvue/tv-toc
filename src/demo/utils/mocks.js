import FullBlog from './demos/fullBlog.vue?raw';
import SimpleDoc from './demos/simpleBlog.vue?raw';

const tocExample1 = {
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

const tocExample2 = {
  "title": "Simple TOC",
  "links": [
    {
      "id": "introduction",
      "text": "Introduction"
    },
    {
      "id": "installation",
      "text": "Installation"
    },
    {
      "id": "configuration",
      "text": "Configuration",
      "children": [
        {
          "id": "basic-setup",
          "text": "Basic Setup"
        },
        {
          "id": "advanced-options",
          "text": "Advanced Options"
        }
      ]
    }
  ]
}

const tocExample3 = {
  "title": "Collapsible TOC",
  "links": [
    {
      "id": "getting-started",
      "text": "Getting Started",
      "children": [
        {
          "id": "installation",
          "text": "Installation"
        },
        {
          "id": "configuration",
          "text": "Configuration"
        }
      ]
    },
    {
      "id": "components",
      "text": "Components",
      "children": [
        {
          "id": "button",
          "text": "Button"
        },
        {
          "id": "input",
          "text": "Input"
        },
        {
          "id": "card",
          "text": "Card"
        }
      ]
    },
    {
      "id": "support",
      "text": "Support"
    }
  ]
}

export const demos = [
  {
    id: 1,
    title: 'Full Blog Post TOC',
    description: 'Table of Contents for a full blog post layout.',
    propsData: {
      toc: tocExample1,
    },
    html: FullBlog,
  },
  {
    id: 2,
    title: 'Simple Documentation TOC',
    description: 'Table of Contents for a simple documentation page.',
    propsData: {
      toc: tocExample2,
    },
    html: SimpleDoc,
  },
  {
    id: 3,
    title: 'Custom & Marker',
    description: 'TOC with visual marker and custom active class.',
    propsData: {
      toc: tocExample2,
      marker: true,
      activeClass: 'custom-active-class',
      observerOptions: {
        rootMargin: '0px 0px -50% 0px'
      }
    },
    html: SimpleDoc,
  },
  {
    id: 4,
    title: 'Collapsible & Animated',
    description: 'TOC with collapsible sections and smooth animations.',
    propsData: {
      toc: tocExample3,
      collapsible: true,
      marker: true
    },
    html: SimpleDoc,
  }
];
