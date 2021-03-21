# Mocha / chai with typescript and webstorm

## How to use
```
npm install
npm test
```
## TL;DR:

This is based on the ts-mocha project, but with a webstorm project configured in it.  Let's see how hard / easy that is 
to configure.

OK, that wasn't too bad.  The false start was setting up a mocha run configuration, which was a bit of a disaster.
What worked brilliantly was just setting up an npm run configuration instead, pointing that at the project's package.json,
and telling it to run the command "npm test".  That both ran the tests correctly and allowed for debugging, 
setting breakpoints, etc.  Sweet!