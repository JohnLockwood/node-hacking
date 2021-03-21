# Node starter projects

To tone up some earlier node muscles, this repository contains some node starters I did, mostly around setting up test frameworks, typescript support, etc.  Each directory is a separate project.  Generally they support the following to get started

```
cd <some-directory>
npm install
npm test
```

## The projects
* jest_testing was trickier to set up at first, but it works OK.  Use n
* mocha_testing went quite well and was very node-friendly.  This uses commonjs require 
for imports.
* mjs_mocha_testing - Trying to see if we can use [ECMA style imports](https://nodejs.org/api/packages.html#packages_determining_module_system)
* mjs2_mocha_testing - A second attempt at ECMA style imports.  This time setting type in package.json.
This is the simpler case.
* ts-mocha - This project shows how to use mocha with typescript via ts-node, and supports both npm test
and npx tsc.