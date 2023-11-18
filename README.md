# Kyle Upton's Resume

[![Build](https://github.com/kyleaupton/resume/actions/workflows/build.yml/badge.svg)](https://github.com/kyleaupton/resume/actions/workflows/build.yml)

## Overview

This repository is the home of my resume. This is a React project that builds to a PDF file. I'm using a package called [`react-pdf/renderer`](https://www.npmjs.com/package/@react-pdf/renderer) to create the PDF.

## Todo

- [ ] Finish the resume
- [x] Dev Mode: Update PDF on HMR
- [x] Build script
- [x] Figure out CD to https://kyleupton.info

## UI

While this is a React project, we can't just build any HTML + CSS into a PDF. `react-pdf/renderer` requires that all template code be written to the [`React primitives`](https://github.com/lelandrichardson/react-primitives) specification.

## CD

Anytime there is a commit on `main`, a GitHub action will run that builds the PDF and uploads it to a public AWS S3 bucket. People will be able to download from there.

## Dev server setup

```bash
yarn

yarn dev
```
