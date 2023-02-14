<template>
  <div class="contacts-actions">
    <ContactFilter @filter="OnSetFilterBy"/>
    <RouterLink to="/contact/edit"><button class="add-contact">Add Contact</button> </RouterLink>
  </div>
  <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "@/services/eventBus.service.js";

import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact-filter.vue";

export default {
  data() {
    return {
      // contacts: null,
      // filterBy: {},
    };
  },
  created() {
    this.$store.dispatch('loadContacts')
  },
  methods: {
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: 'removeContact', contactId })
        showSuccessMsg('Contact removed')
      } catch (err) {
        showErrorMsg('Cannot remove contact')
      }
    },
    OnSetFilterBy(filterBy) {
      console.log('filterBy', filterBy)
      this.$store.dispatch('loadContacts', {filterBy} );
    },
  },
  computed: {
 contacts() {
      return this.$store.getters.contacts;
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