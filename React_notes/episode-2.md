EP-2

=> create new repo in github - git init - git branch -M main - this will make 'main' as main branch, earlier it ws master

github is a client - a place where we can host git repositries
git add .
git commit -m "episode-1"
My local git does not know what is remote -  so un below cmd
git remote add origin https://github.com/abhijitpandey30/namaste-react.git

Configure github ssh key - search for it - open terminal

Ignite our APP !
Bundling, code splitting, chunking, img optimization, remove comments, minimize - before go to prod
https://legacy.reactjs.org/docs/code-splitting.html
create-react-app - gives u a scaffolding, already ingnited app, ready for prod

NPM - it is anything but node package manager - it does manages packages - it does not stand for Node Package Manager, behind the scenes it does manage node repo - standard repo for all packages - all packages are hosted over there


package.json is a configuration for NPM

The most imp pacakge in our proj is a bundler - bundle app to be able to ship to prod - webpack, parcel, Vite all are bundlers
Dev dep - only in dev phase, normal dep - used in prod - -D (dev dependency)

tilde vs caret - 
"lodash": "~4.17.20" - we’re specifying that our project can use any version of the lodash package that has a major version of 4 and a minor version of 17, but with a greater or equal patch version number.

"lodash": "^4.17.20" - we’re specifying that our project can use any version of the lodash package that has a major version of 4, but with a greater or equal minor version number

package-lock.json  - it has exact package version(package.json can have approx using caret and tilde), integrity - has a hash - whatever there is on local, same goes on prod. so that we don't have the problem - it works on local and not on prod.

Transitive dependencies - parcel has deps, those deps will have their own deps, that's why we so many folders inside node_modules even though we just installed parcel - every npm package has it's own package.json - that's how npm knows which deps to install


Put node_modules inside gitignore - if we have package.json ad package-lock.json, we can always regenerate our node_modules, so no need to push it

npx parcel index.html
npm  - install
npx - execute that package

Parcel - goes to index.html - make a dev build and host it to localhost sever with port 1234

CDN is not good way - costly op - network call to react code, we will have to keep changing our URL - better to have it inside package.json

npm i react

After we comment CDN, it will give error React is not defined. So import React
import React from "react"; // importing react from node_modules

<script src="app.js"> - normal js file can't have import/export. We need to pass type="module" to it

Differential loading - support older browser

Tree shaking - remove unused code

Remove  -   // "main": "app.js", from package.json - when we run -  npx parcel build index.html

browserlist.dev - npm package we installed - tell our app which browser we support - borwserlist - if we want our app to run in browsers used by 99% USA users, can search and do that

npm start - same as npm run start (start is reserved)

npm run build
 npm run - run the scripts inside package.json