<template>
  <div>
    <Hero title="GAMES GIVEAWAYS" />
    <div class="columns is-multiline is-narrow-mobile mt-6">
      <Card v-for="(item, index) in giveaways" :key="index" :giveaway="item" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: { Card, Hero },
  computed: {
    giveaways() {
      return this.$store.state.allGiveAways;
    },
  },
};
</script>
