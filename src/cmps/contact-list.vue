<template>
  <section>
    <ul class="contact-list">
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
          <button @click="onRemoveContact(contact._id)">x</button>
        </section>
      </li>
    </ul>
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