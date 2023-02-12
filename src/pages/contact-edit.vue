<template>
<h2>Transfer to:</h2>
  <form @submit="transfer" v-if="contact" class="contact-edit">
    <input type="text" v-model="contact.name" />
    <input type="number" v-model="contact.score" />
    <button>Transfer</button>
  </form>
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
  methods:{
    async transfer(){
      
      await contactService.save(this.contact)
      console.log('transfered- move from user if sufficient funds')
      this.$router.push('/contact')
    }
  }
};
</script>

<style>
</style>