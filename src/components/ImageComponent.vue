<template>
<div>
  <span>{{template.label}}</span>
  <img :src="template.value" />
</div>
</template>

<script>
export default {
  props: ['template']
}
</script>

<style scoped>
</style>
