<template>
  <div class="transfer-container">
    <h3 class="transfer-header">Transfer Funds to: {{ contact.name }}</h3>
    <div class="transfer-txt">
      <p>Enter the amount you would like to transfer.</p>
    </div>
    <form @submit.prevent="transfer" class="transfer-form">
      <div>
        <label for="amount" class="transfer-label">Amount</label>
        <div class="">
          <span class=""> ₿ </span>
        </div>
        <input
          type="text"
          name="amount"
          id="amount"
          required
          v-model="amount"
          class="transfer-input"
          placeholder="0.00"
          aria-describedby="price-currency"
        />
        <div class="">
          <span class="" id="price-currency"> BTC </span>
        </div>
      </div>
      <button type="submit" class="transfer-btn">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["contact"],
  data() {
    return {
      amount: "",
    };
  },
  methods: {
    transfer() {
      this.$emit("transfer", this.amount);
      this.amount = "";
    },
  },
};
</script>

<style>
</style>