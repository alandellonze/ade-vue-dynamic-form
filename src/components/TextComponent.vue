<template>
<div>
  <el-form-item :label="field.label" :prop="'fields.' + index + '.values.' + language" :rules="field.validation">
    <el-input v-model="field.values[language]"></el-input>
  </el-form-item>
</div>
</template>

<script>
export default {
  props: ['language', 'field', 'index']
}
</script>

<style scoped>
</style>
