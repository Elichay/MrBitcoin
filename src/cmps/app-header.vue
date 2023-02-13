<template>
  <header>
    <div class="logo-container">
      <img src="../assets/img/bitcoin-logo.svg" alt="" />
      <h1>Mr. BitCoin</h1>
    </div>
     <span v-if="rate">1$ = {{ rate }}₿</span>
     <span v-if="rate">1₿ = {{ (1/rate).toLocaleString() }}$</span>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/stat">Stats</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      rate: null,
      opRate: null,
    };
  },
  async created() {
    this.rate = await bitcoinService.getRate();
    this.opRate = await (1/(bitcoinService.getRate())).toFixed(2);
    console.log('this.rate', this.rate)
  }, 
};
</script>

