<template>
  <v-container>
    <v-row class="text-center">
      <div>
        <p>{{ msg }}</p>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({
  name: "HelloWorld"
})
export default class HelloWorld extends Vue {
  @Prop(String) msg: string | undefined;

  private ecosystem: Array<object> = [
    {
      text: "vuetify-loader",
      href: "https://github.com/vuetifyjs/vuetify-loader"
    },
    {
      text: "github",
      href: "https://github.com/vuetifyjs/vuetify"
    },
    {
      text: "awesome-vuetify",
      href: "https://github.com/vuetifyjs/awesome-vuetify"
    }
  ];
  private importantLinks: Array<object> = [
    {
      text: "Documentation",
      href: "https://vuetifyjs.com"
    },
    {
      text: "Chat",
      href: "https://community.vuetifyjs.com"
    },
    {
      text: "Made with Vuetify",
      href: "https://madewithvuejs.com/vuetify"
    },
    {
      text: "Twitter",
      href: "https://twitter.com/vuetifyjs"
    },
    {
      text: "Articles",
      href: "https://medium.com/vuetify"
    }
  ];
  private whatsNext: Array<object> = [
    {
      text: "Explore components",
      href: "https://vuetifyjs.com/components/api-explorer"
    },
    {
      text: "Select a layout",
      href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
    },
    {
      text: "Frequently Asked Questions",
      href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
    }
  ];
}
</script>
