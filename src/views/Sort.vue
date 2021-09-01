<template>
  <div>
    <Hero title="FILTER GIVEAWAYS" />
    <FilterMenu />
    <CardList :data="sortedGiveaways" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import FilterMenu from "@/components/FilterMenu.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "Sort",
  components: { Hero, FilterMenu, CardList },
  computed: {
    sortedGiveaways() {
      return this.$store.state.sortedGiveAways;
    },
  },
};
</script>

<style></style>
