import Vue from "vue";
import Vuetify from "vuetify/lib";
import light from "./theme";
import { preset } from "vue-cli-plugin-vuetify-preset-crane/preset";
import "@mdi/font/css/materialdesignicons.css"; // ensure you are using css-loader

// import

Vue.use(Vuetify);

const options = {
  theme: {
    themes: { light }
  },
  breakpoint: { scrollbarWidth: 12 },
  icons: {
    iconfont: "mdi" // default - only for display purposes
    // values
  }
};

export default new Vuetify({
  // the provided global preset is first merged with defaults
  preset,
  // user options are then merged, overwriting defaults and the global preset
  ...options
});
