const prompt = require('prompt-sync')( { sigint: true } );

// helper function
const { madLib } = require('./madLib.js')

// driver function
const main = () => {
  const message = madLib('Basket Weaver', 'Gilbert', 'breakdance', false);
  console.log(message);
}

main();