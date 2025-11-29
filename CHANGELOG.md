# Changelog

All notable changes to `@todovue/tv-toc` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-28

### Added
- Initial stable release of `@todovue/tv-toc`.
- `TvToc` Vue 3 component to render a table of contents (TOC) from a `toc` object.
- Support for nested sections via `children` links.
- Smooth scrolling to headings using `scrollIntoView` and URL hash update with `history.pushState`.
- `useToc` composable with `scrollToId` and `formatId` helpers.
- Minimal default styles and BEM-like CSS classes for easy customization.
- Vite demo with basic and blog-like TOC examples.

[1.0.0]: https://github.com/TODOvue/tv-toc/pull/1/files
