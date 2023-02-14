<template>
  <section>
    <TransitionGroup name="list" tag="ul" class="contact-list">
      <li
        class="contact-preview grid"
        v-for="contact in contacts"
        :key="contact._id"
      >
          <button class="remove-contact" @click="onRemoveContact(contact._id)">x</button>
        <ContactPreview :contact="contact" />
        <section class="actions flex justify-between">
          <RouterLink :to="`/contact/${contact._id}`">
            <button class="details">Details</button>
          </RouterLink>
          <RouterLink :to="`/contact/edit/${contact._id}`">
            <button class="edit">Edit</button>
          </RouterLink>
        </section>
      </li>
    </TransitionGroup>
  </section>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit("remove", contactId);
    },
  },
  components: {
    ContactPreview,
  },
};
</script>

<style>
</style>