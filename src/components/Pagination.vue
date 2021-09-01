<template>
  <div>
    <ul>
      <li
        v-for="index in hasPages"
        :key="index"
        @click="onNavItemCLick(index)"
      ></li>
      <nav
        class="pagination is-rounded is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <ul class="pagination-list">
          <li
            v-for="index in hasPages"
            :key="index"
            @click="onNavItemCLick(index)"
          >
            <a
              v-if="currentPage === index"
              class="pagination-link is-current"
              >{{ index }}</a
            >
            <a v-else class="pagination-link">{{ index }}</a>
          </li>
        </ul>
      </nav>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["itemsTotal", "itemsPerPage"],
  data: () => {
    return {
      currentPage: 1,
      hasPages: 0,
      from: 0,
      to: 10,
    };
  },
  created() {
    this.hasPages = Math.ceil(this.itemsTotal / this.itemsPerPage);
    this.from = this.currentPage * this.hasPages - this.hasPages;
    this.to = this.currentPage * this.hasPages;
  },
  methods: {
    onNavItemCLick(page) {
      this.currentPage = page;
      this.$emit("onPaginationChange", page);
    },
  },
};
</script>

<style></style>
