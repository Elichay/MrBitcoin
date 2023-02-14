<template>
<div class="contact-container grid">

  <h2 class="contact-name contact-data">Name: {{ contact.name }}</h2>
  <h3 class="contact-score contact-data">Current balance: {{ contact.score }}</h3>
  <h3 class="contact-phone contact-data">Phone: {{ contact.phone }}</h3>
  <h3 class="contact-email contact-data">Email: {{ contact.email }}</h3>
  <img  class="contact-img" v-if="contact.imgUrl" :src="contact.imgUrl" alt="" />
  <h3 class="contact-no-img" v-if="!contact.imgUrl">no img...</h3>
</div>
</template>

<script>
export default {
  name: "contactProfile",
  props: ["contact"],
};
</script>

<style>
</style>