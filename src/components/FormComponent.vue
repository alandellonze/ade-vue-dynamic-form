<template>
<div>
  <form>
    <!-- generate all the input in the template -->
    <div v-for="template in templates">
      <df-text v-if="template.type === 'text'" :template="template" />
      <df-textarea v-if="template.type === 'textarea'" :template="template" />
      <df-image v-if="template.type === 'image'" :template="template" />
    </div>

    <!-- submit button -->
    <button v-on:click.prevent="innerOnSubmit">submit</button>
  </form>
</div>
</template>

<script>
export default {
  props: ['templates', 'onSubmit'],

  methods: {
    innerOnSubmit: function () {
      this.onSubmit()
    }
  }
}
</script>

<style scoped>
</style>
