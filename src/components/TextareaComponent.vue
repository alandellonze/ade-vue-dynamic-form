<template>
<div>
  <el-form-item :label="template.label">
    <el-input type="textarea" v-model="template.value[language]" :maxlength="template.maxLength"></el-input>
  </el-form-item>
</div>
</template>

<script>
export default {
  props: ['language', 'template']
}
</script>

<style scoped>
</style>
