<template>
  <section>
    <TransitionGroup name="list" tag="ul" class="contact-list">
      <li
        class="contact-preview"
        v-for="contact in contacts"
        :key="contact._id"
      >
        <ContactPreview :contact="contact" />
        <section class="actions">
          <RouterLink :to="`/contact/${contact._id}`">
            <button>Details</button>
          </RouterLink>
          <RouterLink :to="`/contact/edit/${contact._id}`">
            <button>Edit</button>
          </RouterLink>
          <button @click="onRemoveContact(contact._id)">x</button>
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