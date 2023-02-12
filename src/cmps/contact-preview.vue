<template>
  <article>
        <h2>{{ contact.name }}</h2>
        <h2>{{ contact.score }}</h2>
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