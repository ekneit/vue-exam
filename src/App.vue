<template>
  <div id="app">
    <NavBar />
    <div class="hero-body">
      <div class="container is-fluid">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  created() {
    this.$store.dispatch("getAllGiveAways");
  },
};
</script>
<style>
img {
  object-fit: cover;
}
</style>
