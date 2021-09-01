<template>
  <div class="column is-one-fifth">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            @click="giveawayPage"
            :src="giveaway.thumbnail"
            alt="Placeholder image"
          />
        </figure>
        <div
          v-if="giveaway.status === 'Active'"
          class="status has-background-success-dark"
        ></div>
        <div
          v-if="giveaway.status !== 'Active'"
          class="status  has-background-danger-dark"
        ></div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <a class="title is-size-5	" @click="giveawayPage">
              {{ giveaway.title }}
            </a>
            <p class="is-6 tm-2">{{ giveaway.type }}</p>
          </div>
        </div>

        <div class="content">
          <time>{{ giveaway.published_date }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["giveaway"],
  methods: {
    giveawayPage() {
      this.$router.push("/giveaway/" + this.giveaway.id);
    },
  },
};
</script>

<style scoped>
.card-image {
  position: relative;
}
.status {
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0.5rem;
}
</style>
