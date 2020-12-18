// store/modules/user.ts
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
@Module({ namespaced: true })
class User extends VuexModule {
  public name = "";
  @Mutation
  public setName(newName: string): void {
    this.name = newName;
  }
  @Action
  public updateName(newName: string): void {
    this.context.commit("setName", newName);
  }
  public get toUpperCase() {
    return this.name.toUpperCase();
  }
  public get toLowerCase() {
    return this.name.toLowerCase();
  }
}
export default User;
