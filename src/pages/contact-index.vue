<template>
  <div class="contact-index">
    <h1>Contact Index</h1>
    <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import ContactList from "@/cmps/contact-list.vue";
export default {
  data() {
    return {
      contacts: null,
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  methods: {
    async removeContact(contactId) {
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter((contact) => contact._id !== contactId);
    },
  },
  components: {
    ContactList,
  },
};
</script>

<style>
</style>