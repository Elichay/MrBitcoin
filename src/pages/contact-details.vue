<template>
  <h1>Contact Details:</h1>
  <div v-if="contact" class="contact-details">
    <h2>Name: {{ contact.name }}</h2>
    <h3>Score: {{ contact.score }}</h3>
    <h3>Phone: {{ contact.phone }}</h3>
    <h3>Email: {{ contact.email }}</h3>
        <img v-if="contact.imgUrl" :src="contact.imgUrl" alt="" />
        <h3 v-if="!contact.imgUrl"> no img...</h3>
    <RouterLink to="/contact">
      <button>Back</button>
    </RouterLink>
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.get(contactId);
  },
};
</script>

<style>
</style>