[![Build Status](https://travis-ci.org/nicklemmon/nicklemmon-blog.svg?branch=master)](https://travis-ci.org/nicklemmon/nicklemmon-blog)

## Development!

To get started:

1. Run `npm install`
2. Run `npm run dev`

## Production

Pushing to `master` should trigger a [Travis CI](https://travis-ci.org) pipeline. If the pipeline succeeds, the site will deploy to production. The CI/CD pipeline runs on all branches though only deploys from `master`.

## Testing

After installing dev dependencies, run `npm run test` to run a series of unit and integration tests built with [Jest](https://jestjs.io) and [Cypress](https://cypress.io).
