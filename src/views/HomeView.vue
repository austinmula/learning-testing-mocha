<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="gallery">
      <ImageCard
        v-for="item in listItems"
        :key="item.id"
        :title="item.title"
        :url="item.url"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ImageCard from "@/components/ImageCard.vue";

export default {
  name: "HomeView",
  data() {
    return {
      listItems: [],
    };
  },
  components: {
    HelloWorld,
    ImageCard,
  },
  methods: {
    async getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const finalRes = await res.json();
      this.listItems = finalRes;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
