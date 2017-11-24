<template>
<textarea v-model="template.value" :required="template.required" :maxLength="template.maxLength"></textarea>
</template>

<script>
export default {
  props: ['template']
}
</script>

<style scoped>
</style>
