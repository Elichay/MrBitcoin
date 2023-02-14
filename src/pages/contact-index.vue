<template>
  <div class="contacts-actions">
    <ContactFilter @filter="OnSetFilterBy"/>
    <RouterLink to="/contact/edit"><button>Add Contact</button> </RouterLink>
  </div>
  <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import { eventBus } from '@/services/eventBus.service.js'
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
    // this.loadContacts()
    // this.contacts = await contactService.query();
  },
  methods: {
    //     async loadContacts() {
    //   this.contacts = await contactService.getContacts(this.filterBy)
    // },
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: 'removeContact', contactId })
        showSuccessMsg('Contact removed')
      } catch (err) {
        showErrorMsg('Cannot remove contact')
      }
      //       const msg = {
      //   txt: `Contact ${contactId} deleted.`,
      //   type: 'success',
      //   timeout: 2500,
      // }
      // await contactService.remove(contactId);
      // this.contacts = this.contacts.filter(
      //   (contact) => contact._id !== contactId
      // )
      //  eventBus.emit('user-msg', msg)
    },
    OnSetFilterBy(filterBy) {
      console.log('filterBy', filterBy)
      // this.filterBy = filterBy;
      // console.log('this.filterBy', this.filterBy)
      this.$store.dispatch('loadContacts', {filterBy} );
    },
  },
  computed: {
 contacts() {
      return this.$store.getters.contacts;
    },
    // filteredContacts() {
    //   const regex = new RegExp(this.filterBy.name, 'i');
    //   return this.contacts.filter(contact => 
    //     regex.test(contact.name))
    // },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style>
</style>