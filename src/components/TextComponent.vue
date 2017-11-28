<template>
<div>
  <span>{{template.label}}</span>
  <input type="text" v-model="template.value[language]" :required="template.required" :maxLength="template.maxLength" />
</div>
</template>

<script>
export default {
  props: ['language', 'template']
}
</script>

<style scoped>
</style>
