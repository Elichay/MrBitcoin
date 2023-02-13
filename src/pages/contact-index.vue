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
    this.loadContacts()
    // this.contacts = await contactService.query();
  },
  methods: {
        async loadContacts() {
      this.contacts = await contactService.getContacts(this.filterBy)
    },
    async removeContact(contactId) {
            const msg = {
        txt: `Contact ${contactId} deleted.`,
        type: 'success',
        timeout: 2500,
      }
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      )
       eventBus.emit('user-msg', msg)
    },
    OnSetFilterBy(filterBy) {
      this.filterBy = filterBy;
      // console.log('this.filterBy', this.filterBy)
      this.loadContacts()
    },
        onSetFilterBy(filterBy) {
      this.filterBy = filterBy
      this.loadContacts()
    },
  },
  computed: {
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