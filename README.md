# Kyle Upton's Resume

## Overview

This repository is the home of my resume. This is a React project that builds to a PDF file. I'm using a package called [`react-pdf/renderer`](https://www.npmjs.com/package/@react-pdf/renderer) to create the PDF.

## Todo

- [ ] Finish the resume
- [ ] Figure out CD to https://kyleupton.info

## UI

While this is a React project, we can't just build any HTML + CSS into a PDF. `react-pdf/renderer` requires that all template code be written to the [`React primitives`](https://github.com/lelandrichardson/react-primitives) specification.

## CD

Eventually I want the resume to be available on https://kyleupton.info with automatic updates when commits are pushed here.

## Dev server

To start the development server run the following command after installing dependencies:

```bash
yarn dev
```
