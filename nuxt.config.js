module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Vastgoedprojecten by Dune Pebbler",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Dune Pebbler Vastgoed marketing. Brochures, logo en huisstijlontwikkeling, advies, website, persbericht, landingspagina, social media campagnes, virtual reality, advertentiecampagne, teksten schrijven, contentcreatie, online en offline nieuwsbrieven, vastgoedfotografie, video, artist impressions, start verkoop manifestatie. Dune Pebbler heeft alles in huis om tot het optimale resultaat te komen bij de verkoop van de woningen."
      }

    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "https://use.fontawesome.com/70a5e06dbb.js" }]
  },
  css: ["~/assets/css/fonts.styl"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clientConfigs: {
      default: "~/apollo/client-configs/default.js"
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
