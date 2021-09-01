<template>
  <div>
    <Hero title="GAMES GIVEAWAYS" />
    <CardList :data="giveaways" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import CardList from "@/components/CardList.vue";

export default {
  name: "Home",
  components: { Hero, CardList },
  computed: {
    giveaways() {
      return this.$store.state.allGiveAways;
    },
  },
};
</script>
