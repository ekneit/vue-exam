<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">
        {{ title }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: ["title"],
};
</script>

<style scoped>
.title {
  font-size: 3rem;
}
.hero {
  text-align: center;
}
#nav a {
  color: white;
  font-size: 1.5rem;
  padding: 0 0.5rem;
}
#nav .router-link-active {
  color: rgb(113, 176, 192);
}

@media only screen and (max-width: 768px) {
  #nav a {
    display: block;
  }
}
</style>
