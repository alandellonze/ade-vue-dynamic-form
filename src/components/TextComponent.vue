<template>
<input type="text" v-model="template.value" :required="template.required" :maxLength="template.maxLength" />
</template>

<script>
export default {
  props: ['template']
}
</script>

<style scoped>
</style>
