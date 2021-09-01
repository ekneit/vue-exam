<template>
  <div>
    <div class="columns is-multiline is-narrow-mobile mt-6">
      <Card
        v-for="(item, index) in getSlicedItems()"
        :key="index"
        :giveaway="item"
      />
    </div>
    <Pagination
      v-if="Array.isArray(data) && data.length > 0"
      :itemsTotal="data.length"
      :itemsPerPage="itemsPerPage"
      v-on:onPaginationChange="onPaginationChange"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Pagination from "./Pagination.vue";
export default {
  name: "CardList",
  props: ["data"],
  data: () => {
    return {
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  components: { Card, Pagination },
  methods: {
    onPaginationChange(page) {
      this.currentPage = page;
    },
    getSlicedItems() {
      let from = this.currentPage * this.itemsPerPage - this.itemsPerPage;
      let to = this.currentPage * this.itemsPerPage;
      return this.data.slice(from, to);
    },
  },
};
</script>

<style></style>
