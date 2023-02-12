<template>
  <div class="contacts-actions">
    <ContactFilter @filter="OnSetFilterBy"/>
    <RouterLink to="/contact/edit"><button>Add Contact</button> </RouterLink>
  </div>
  <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact-filter.vue";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
  methods: {
    async removeContact(contactId) {
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      );
    },
    OnSetFilterBy(filterBy) {
      this.filterBy = filterBy;
      console.log('this.filterBy', this.filterBy)
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.name, 'i');
      return this.contacts.filter(contact => 
        regex.test(contact.name))
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style>
</style>