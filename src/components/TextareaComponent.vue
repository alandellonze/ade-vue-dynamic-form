<template>
<div>
  <span>{{template.label}}</span>
  <textarea v-model="template.value[language]" :required="template.required" :maxLength="template.maxLength"></textarea>
</div>
</template>

<script>
export default {
  props: ['language', 'template']
}
</script>

<style scoped>
</style>
