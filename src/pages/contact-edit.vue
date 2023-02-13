<template>
  <h2>{{ getTitle }}</h2>
  <form @submit.prevent="onSave" v-if="contact" class="contact-edit">
    <input
      type="text"
      v-model="contact.name"
      placeholder="Enter contact name..."
    />
    <!-- <input type="number" v-model="contact.score" /> -->
    <input
      type="text"
      v-model="contact.phone"
      placeholder="Enter contact phone..."
    />
    <input
      type="text"
      v-model="contact.email"
      placeholder="Enter contact email..."
    />
    <button>{{ getTitle }}</button>
  </form>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import { showErrorMsg, showSuccessMsg } from "@/services/eventBus.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    if (contactId) {
      this.contact = await contactService.get(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  methods: {
    async onSave() {
      // await contactService.save(this.contact);
      // this.$router.push("/contact");
      try {
        await this.$store.dispatch({
          type: "saveContact",
          contact: this.contact,
        });
        showSuccessMsg("Contact saved");
        this.$router.push("/contact");
      } catch (err) {
        showErrorMsg("Cannot save contact");
      }
    },
  },
  computed: {
    getTitle() {
      return (this.contact._id ? "Edit" : "Add") + " Contact";
    },
  },
};
</script>

<style>
</style>