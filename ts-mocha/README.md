# Mocha / chai with typescript

## How to use
```
npm install
npm test
```
## TL;DR:

This is based on https://dev.to/matteobruni/mocha-chai-with-typescript-37f -- but departs widely from
it as that article was not too much help.

What I ended up doing was configuring Mocha using the .mocharc.json config file, based on this example:
https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js.  As currently written it 
supports and demonstrates tests being in src/something.test.ts and in test/*.ts.

It assumes:

```
npm install -g typescript
```

Note that several of the options in tsconfig.json and the inclusion of "@types/core-js": "^2.5.4", in package.json were added to support compiling the project using:

```
npx tsc
```

This is not strictly necessary 