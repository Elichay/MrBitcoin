<template>
  <header>
    <div class="logo-container flex">
      <img class="logo icon36" src="../assets/img/bitcoin-logo.svg" alt="" />
      <h1 class="brand-name">Mr. BitCoin</h1>
    </div>
    <!-- <span v-if="rate">1$ = {{ rate }}₿</span>
     <span v-if="rate">1₿ = {{ (1/rate).toLocaleString() }}$</span> -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/stat">Stats</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <header>
    <div class="user-header">
      <div v-if="user.name" class="user-name flex">
        <p><span>User: </span><span>{{ user.name }}</span></p>
        <p><span>, Balance: </span><span>{{user.balance}}₿</span></p>
      </div>
      
      </div>
    <span v-if="rate">1$ = {{ rate }}₿</span>
    <span v-if="rate">1₿ = {{ (1 / rate).toLocaleString() }}$</span>
  </header>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
import { userService } from "@/services/user.service";
import { eventBus } from "../services/eventBus.service";

export default {
  data() {
    return {
      rate: null,
      opRate: null,
      loadingUser: false,
      user: {},
    };
  },
  async created() {
    this.rate = await bitcoinService.getRate();
    this.opRate = await (1 / bitcoinService.getRate()).toFixed(2);
    
    eventBus.on("user-update", async () => {
      this.user = await userService.getUser();
    });
  },
    async mounted() {
    this.loadingUser = true;
    this.user = await userService.getUser();
    this.loadingUser = false;
  },
};
</script>

