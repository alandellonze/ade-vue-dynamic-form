<template>
<div>
  <el-form-item :label="template.label">
    <img :src="template.value" :width="template.size" />
  </el-form-item>
</div>
</template>

<script>
export default {
  props: ['template']
}
</script>

<style scoped>
</style>
