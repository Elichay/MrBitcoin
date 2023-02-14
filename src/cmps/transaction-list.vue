
<template>
  <ul role="list" class="space-y-3">
    <li
      v-for="transaction in transactions"
      :key="transaction.at"
      class=""
    >
      <div class="">
        <span class="">To: {{ transaction.to }}</span>
        <span class="">{{
          new Date(transaction.at).toLocaleString()
        }}</span>
      </div>
      <div class="">${{ transaction.amount }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
};
</script>