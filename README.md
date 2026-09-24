# Resume of Kyle Upton

[![Build Status](https://github.com/kyleaupton/resume/actions/workflows/build.yml/badge.svg)](https://github.com/kyleaupton/resume/actions/workflows/build.yml)

## Introduction

This is the repository that hosts the source code for my resume. This project, built using React, renders to a PDF file for easy distribution and printing. The PDF generation is done by [`react-pdf/renderer`](https://www.npmjs.com/package/@react-pdf/renderer).

## Continuous Deployment

The project is set up with a continuous deployment pipeline. Upon every commit to the `main` branch, a GitHub action is triggered. This action builds the PDF and uploads it to a publicly accessible AWS S3 bucket, from where it can be downloaded.

## Development Server

To set up the development server, execute the following commands:

```bash
npm ci

npm run dev
```

Use npm for dependency management. `npm ci` installs the exact versions in
`package-lock.json`; use `npm install` when adding or updating dependencies and
commit the updated lockfile.

Run `npm run checkTypes` to check TypeScript before building.

## Deploy PDFs Manually

```bash
npm run deploy
```

Deployment requires `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in the
environment or a local `.env` file.

## Build PDFs

Sometimes it is helpful to build the PDFs and not deploy them. You can do that with the following:

```bash
npm run build
```

This generates each resume variant in `dist/` without uploading anything or
requiring AWS credentials.
