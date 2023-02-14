<template>
  <article class="preview-container grid">
        <h2 class="contact-preview-name">{{ contact.name }}</h2>
         <img class="contact-preview-img icon60" v-if="contact.imgUrl" :src="contact.imgUrl" alt="" />
        <h4 class="contact-preview-score">Balance: {{ contact.score }}</h4>
  </article>
</template>

<script>
export default {
props:{
    contact:{
        type: Object,
        required: true,
    },
},
}
</script>

<style>

</style>