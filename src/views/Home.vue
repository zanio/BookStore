<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <User />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import User from "@/components/user/User.vue";

@Component({
  name: "Home",
  components: {
    HelloWorld,
    User
  }
})
export default class Home extends Vue {}
</script>
