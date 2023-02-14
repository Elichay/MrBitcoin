<template>
  <section class="main-home grid">
    <div class="logo-home grid">
      <img
        class="logo"
        @click="goToAbout"
        src="../assets/img/bitcoin-logo.svg"
        alt=""
      />
      <h1 class="brand-name">Mr. BitCoin</h1>
    </div>
    <div class="right-home grid">
      <fieldset v-if="user" class="user-data grid">
        <h2>Welcome {{ user.name }}</h2>
        <h3>Your balance: {{ user.balance }}₿</h3>
        <!-- <button @click="onLogOut">Log Out</button> -->
      </fieldset>
      <fieldset v-else class="user-login grid">
        <h2>Please Log in</h2>
        <RouterLink to="/login">Login</RouterLink>
      </fieldset>
    </div>
  </section>
</template>

<script>
import { eventBus } from "@/services/eventBus.service";
import { userService } from "@/services/user.service";
export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    eventBus.on("user-update", async () => {
      this.user = await userService.getUser();
    });
  },
  async mounted() {
    this.user = await userService.getUser();
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
    onLogOut(){
      localStorage.removeItem('user');
    }
  },
};
</script>
