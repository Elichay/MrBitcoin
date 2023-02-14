<template>
  <div class="contact-filter">
    <p>Search Contact:</p>
    <input @input="onFilter" type="text" v-model="filterBy" placeholder="Search by name" />
    <!-- <input type="text" v-model="filterBy.score" placeholder="Search by score" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: '',
      // filterBy: {
      //   name: '',
      // },
    }
  },
    methods: {
        onFilter() {
        this.$emit('filter', this.filterBy)
        },
    },
}
</script>

<style>
</style>