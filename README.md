# Professional Resume of Kyle Upton

[![Build Status](https://github.com/kyleaupton/resume/actions/workflows/build.yml/badge.svg)](https://github.com/kyleaupton/resume/actions/workflows/build.yml)

## Introduction

Welcome to the repository that hosts the source code for my professional resume. This project, built using React, compiles into a PDF file for easy distribution and printing. The PDF generation is handled by a package known as [`react-pdf/renderer`](https://www.npmjs.com/package/@react-pdf/renderer).

## User Interface

Despite being a React-based project, it's important to note that not all HTML and CSS can be directly translated into a PDF. The `react-pdf/renderer` package necessitates that all template code adheres to the [`React primitives`](https://github.com/lelandrichardson/react-primitives) specification.

## Continuous Deployment

The project is set up with a continuous deployment pipeline. Upon every commit to the `main` branch, a GitHub action is triggered. This action builds the PDF and subsequently uploads it to a publicly accessible AWS S3 bucket, from where it can be downloaded.

## Development Server Configuration

To set up the development server, execute the following commands:

```bash
yarn install

yarn dev
```
