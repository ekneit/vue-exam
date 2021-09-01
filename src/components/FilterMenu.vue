<template>
  <section class="info-tiles">
    <div class="tile is-ancestor has-text-centered">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="subtitle">Select Platforms</p>
          <div class="select">
            <select v-model="selectedPlatform">
              <option>pc</option>
              <option>steam</option>
              <option>epic-games-store</option>
              <option>ubisoft</option>
              <option>gog</option>
              <option>itchio</option>
              <option>ps4</option>
              <option>xbox-one</option>
              <option>switch</option>
              <option>android</option>
              <option>ios</option>
              <option>vr</option>
              <option>battlenet</option>
              <option>origin</option>
              <option>drm-free</option>
            </select>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="subtitle">Select Types</p>
          <div class="select">
            <select v-model="selectedType">
              <option>game</option>
              <option>loot</option>
              <option>beta</option>
            </select>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="subtitle">SortBy</p>
          <div class="select">
            <select v-model="selectedSortBy">
              <option>date</option>
              <option>value</option>
              <option>popularity</option>
            </select>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article
          class="tile  is-align-items-center is-flex is-justify-content-center"
        >
          <button @click="sort" class="button is-primary is-large">
            Search
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterMenu",
  data: () => {
    return {
      selectedPlatform: "",
      selectedType: "",
      selectedSortBy: "",
    };
  },
  methods: {
    sort() {
      const data = {
        platform: this.selectedPlatform,
        type: this.selectedType,
        sortBy: this.selectedSortBy,
      };
      this.$store.dispatch("getSortedGiveAways", data);
    },
  },
};
</script>

<style></style>
