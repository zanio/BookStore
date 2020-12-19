import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

//todo: test is currently failing
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Welcome to Vuetify";

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.find("p").text()).toMatch(msg);
  });
});
