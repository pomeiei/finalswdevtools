import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "../../src/views/editProfile.vue";


describe("editProfile.vue", () => {
  it("renders an error if length is too long", async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.setData({
      tag:[],
      customtag: "faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    });
    expect(wrapper.html()).toContain(
      "customtag must be less than 20 characters."
    );
  });
  it("renders an error if length is not too long", async () => {
    const wrapper = mount(HelloWorld);
    await wrapper.setData({tag:[], customtag: "fa" });
    expect(wrapper.html()).not.toContain(
      "customtag must be less than 20 characters."
    );
  });
  
});
