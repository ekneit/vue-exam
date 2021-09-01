<template>
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-5 status">
        <figure class="image is-4by3">
          <img :src="item.thumbnail" alt="Description" />
        </figure>
        <div
          v-if="item.status === 'Active'"
          class="status-block has-background-success-dark"
        >
          {{ item.status }}
        </div>

        <div
          v-if="item.status !== 'Active'"
          class="status-block has-background-danger-dark"
        >
          Not active
        </div>
      </div>
      <div class="column is-6 is-offset-1">
        <h1 class="title is-3">
          {{ item.title }}
        </h1>

        <div
          class="button is-small mb-4 mr-2"
          v-for="(item, index) in platforms"
          :key="index"
        >
          {{ item }}
        </div>

        <h2 class="subtitle is-6">
          {{ item.description }}
        </h2>
        <p class="is-6 " v-if="price > 0">
          <span class="has-text-weight-bold">Price: </span>{{ item.worth }}
          <span
            class="more has-background-success-dark "
            v-if="price < 10"
          ></span>
          <span class="more" style="background-color: yellow;" v-else></span>
        </p>
        <p class="is-6">
          <span class="has-text-weight-bold">Instructions: </span
          >{{ item.instructions }}
        </p>
        <div class="is-7 ">
          <span class="has-text-weight-bold">End time: </span>
          {{ item.end_date }}
        </div>
        <br />
        <a
          :href="item.gamerpower_url"
          class="button is-medium is-primary is-outlined"
        >
          Give Away
        </a>
        <a
          :href="item.open_giveaway_url"
          class="button is-medium is-link is-outlined ml-3"
        >
          Web Page
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GiveAwayPage",
  props: ["item"],
  data: () => {
    return {
      platforms: [],
      price: 0,
    };
  },
  created() {
    const platforms = this.$store.state.giveaway.platforms;
    const platformsSeperated = platforms.split(",");
    this.platforms = platformsSeperated;
  },
  beforeUpdate() {
    const worth = this.$store.state.giveaway.worth;
    console.log(worth);
    if (worth !== "N/A") {
      this.price = Number(worth.substring(1));
    }
  },
};
</script>

<style scoped>
.more {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
.status {
  position: relative;
}
.status-block {
  position: absolute;
  top: 11px;
  padding: 1rem;
  color: floralwhite;
}
</style>
