<template>
  <div class="details">
    <p class="primary--text font-weight-medium mdi-format-header-2">
      User in lowercase
      <span class="error--text heading">{{ nameLowerCase }}</span>
    </p>

    <p class="primary--text font-weight-medium mdi-format-header-2">
      User in lowercase
      <span class="error--text heading">{{ nameUpperCase }}</span>
    </p>

    <label>
      <v-text-field
        :model="name"
        outline
        background-color="warning"
        @keydown="updateName($event.target.value)"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const user = namespace("User");
@Component({
  name: "User"
})
export default class User extends Vue {
  @user.State
  public name!: string;

  @user.Getter("toUpperCase")
  public nameUpperCase!: string;

  @user.Getter("toLowerCase")
  public nameLowerCase!: string;

  @user.Action
  public updateName!: (newName: string) => void;

  public updated() {
    console.log(this.name);
  }
}
</script>
