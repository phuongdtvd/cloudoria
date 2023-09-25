// Import path for resolving file paths
var path = require("path");
module.exports = {
  // Specify the entry point for our app.
  entry: ["js/client/index.js","js/client/easystar.min.js", "js/client/phaser-input.min.js", "js/spaceMap.js", "js/client/game_tests/Quest1.js", "js/client/Being.js", "js/client/Human.js", "js/client/NPC.js", "js/client/Player_client.js", "js/client/Monster_client.js", "js/client/Item_client.js", "js/client/Factory.js", "js/client/game.js", "js/client/home.js", "js/client/Decoder.js", "js/client/main.js", "js/client/client.js", "js/CoDec.js", "js/AOIutils.js"]
  .map(file => path.join(__dirname, file)),
  // Specify the output file containing our bundled code.
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: "eval-source-map",
  externals: {
    io: 'io',
  },
  
   // Enable WebPack to use the 'path' package.
   resolve:{
  fallback: { path: require.resolve("path-browserify")}
  }

};