# Changelog

All notable changes to `@todovue/tv-toc` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Introduced a customizable marker for Table of Contents (ToC) items to allow for personalized bullet styles or icons.
- Added an active class property to ToC items, enabling specific styling for the currently viewed section to improve navigation clarity.

### Dependencies
- Updated `@todovue/tv-demo` to `^1.4.4`.
- Updated `sass` to `^1.97.2`.
- Updated `vite` to `^7.3.1`.

## [1.0.2] - 2025-12-27

### Added
- Added automatic publishing to the TODOvue cPanel in `release.yml` for each release, simplifying package distribution and updates.
- Added `package-lock.json` to the repository to ensure dependency consistency and facilitate version management across development and production environments.

### Changed
- Changed the `base` option in `vite.config.js` for website deployment in cpanel.

### Fixed
- Fixed repository URL in `package.json` to point to the correct GitHub repository.
- Fixed the token configuration used to generate the package in the GitHub Actions workflow `release.yml`.

### Dependencies
- Updated dependency versions in `package.json` to maintain compatibility and benefit from improvements and bug fixes in the used libraries.

## [1.0.1] - 2025-11-28

### Fixed
- Correct CSS file extension for Table of Contents styles.

## [1.0.0] - 2025-11-28

### Added
- Initial stable release of `@todovue/tv-toc`.
- `TvToc` Vue 3 component to render a table of contents (TOC) from a `toc` object.
- Support for nested sections via `children` links.
- Smooth scrolling to headings using `scrollIntoView` and URL hash update with `history.pushState`.
- `useToc` composable with `scrollToId` and `formatId` helpers.
- Minimal default styles and BEM-like CSS classes for easy customization.
- Vite demo with basic and blog-like TOC examples.

[1.0.2]: https://github.com/TODOvue/tv-toc/pull/3/files
[1.0.1]: https://github.com/TODOvue/tv-toc/pull/2/files
[1.0.0]: https://github.com/TODOvue/tv-toc/pull/1/files
