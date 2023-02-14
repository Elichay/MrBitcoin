<template>
  <div class="login-page">
    <div class="login-containerflex justify-center">
      <h2 class="login-header">Login:</h2>
      <form @submit.prevent="login" class="login-form">
          <label for="name" class="login-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            v-model="name"
            class="login-input"
            placeholder="login / signup..."
          />
        <button type="submit" class="login-btn">Login / SignUp</button>
      </form>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../services/eventBus.service";
import { userService } from "../services/user.service";
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    login() {
      userService.signup(this.name);
      eventBus.emit("user-update");
      this.$router.push("/");
    },
  },
};
</script>