const path = require("path");

module.exports = {
    pwa: {
        name: "SoTap Dev",
        themeColor: "#000",
        msTileColor: "#000",
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: "GenerateSW"
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
          path.resolve(__dirname, "./src/css/*.less")
        ]
      }
    }
}
