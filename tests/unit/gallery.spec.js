/* eslint-disable */
import { destroyVM, createTest } from "../../util";
import { expect } from "chai";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
    let vm;

    afterEach(() => {
        destroyVM(vm);
    });

    it("Test everything rendered", () => {
        vm = createTest(HomeView, { content: "HomeView Image Cards" }, true);
        expect(vm.$el.querySelectorAll(".gallery img").length).to.equal(5000);
    });
});
