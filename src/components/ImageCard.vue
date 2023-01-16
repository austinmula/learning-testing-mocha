<template>
  <div class="card">
    <img :src="url" :alt="title" />
  </div>
</template>

<script>
export default {
  props: { title: String, url: String },
};
</script>

<style></style>
