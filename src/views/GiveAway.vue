<template>
  <GiveAwayPage :item="giveaway" />
</template>

<script>
import GiveAwayPage from "@/components/GiveAwayPage.vue";
export default {
  name: "GiveAway",
  components: { GiveAwayPage },
  computed: {
    giveaway() {
      return this.$store.state.giveaway;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("getGiveAway", id);
  },
};
</script>

<style></style>
