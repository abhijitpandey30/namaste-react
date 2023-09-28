# Developers testing - why requird -  a single line of code can introduce bug in any part of app
- Manual testing
- Code to test the app -
- > Unit testing (test ur react component in isolation - like just the header comp)
- > Integration testing - testing the integraation of comp - comp talk to each other - test the flow - search res- click -> 3 comp should appear - test this flow
- > End to End testing  - e2e testing - from when user logs in to log out - cypress, selenium

# React testing libraries - https://testing-library.com/docs/react-testing-library/intro/ - 
- built on jest - delightful javascript testing framework - jest with label => npm install --save-dev babel-jest @babel/core @babel/preset-env (https://jestjs.io/docs/getting-started)
- built on top of DOM testing lib
- create-react-app - React testing lib comes with it

# Steps - 
- Install react testing lib
- Install jest
- Installed babel dependencies
- Configure babel
- Configure parcel config to disable default babel transpilation (https://parceljs.org/languages/javascript/#usage-with-other-tools - disable parcel config to use our babel config)
- jest configuartion - npx jest --init
- install jsdom lib
- npm i -D @babel/preset-react to make JSX work
- include @babel/preset-react inside babel.config.js
- install @testing-library/jest-dom
# jsDom - test cases don't have server - like browser, they need a runtime env -where test cases will be executed
- that is jsDOm, it is like DOM, not real DOM

- https://testing-library.com/docs/react-testing-library/setup#jest-28 
- f you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately. Previosly it used to come with React testing lib

- jest tracks test inside - **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)
- anything inside __tests__ folder or below files
- Header.test.js
- Header.test.ts
- Header.spec.ts
- Header.spec.ts
- __ - double underscore - Dunder - __tests - Dunder test - reserved word


# render - load comp into jsDOM

- describe - group test cases, we can nest describe inside
- it is same as "test"
- jsDOm is browser like, it's not browser - it doesn't understand fetch
- Fetch is broswer API - it's not part of javscript
- import "@testing-library/jest-dom"; for tobe methods
- import { render } from "@testing-library/react"
- import { act } from "react-dom/test-utils" - if async or state update happens, wrap inside act
- beforeAll - before running all test cases - run this once - vs beforeEach vs afterAll - inside describe
- npm i -D @types/jest - jest suggestions

- coverage/lcov-report/index.html - live coverage