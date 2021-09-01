<template>
  <div>
    <Hero title="FILTER GIVEAWAYS" />
    <FilterMenu />
    <div class="columns is-multiline is-narrow-mobile mt-6">
      <Card
        v-for="(item, index) in sortedGiveaways"
        :key="index"
        :giveaway="item"
      />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import FilterMenu from "@/components/FilterMenu.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Sort",
  components: { Hero, FilterMenu, Card },
  computed: {
    sortedGiveaways() {
      return this.$store.state.sortedGiveAways;
    },
  },
};
</script>

<style></style>
