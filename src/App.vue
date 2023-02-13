<script>
import AppHeader from "@/cmps/app-header.vue";
import AppFooter from "@/cmps/app-footer.vue";
import UserMsg from "@/cmps/user-msg.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <UserMsg />
  <AppFooter />
</template>

<style scoped>
main {
  min-height: calc(90vh - 4rem);
}
</style>
