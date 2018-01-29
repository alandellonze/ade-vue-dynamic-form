<template>
<div>
  <el-form-item :label="field.label" :prop="'fields.' + index + '.values.' + language" :rules="field.validation">
    <img :src="field.values[language]" :width="field.size" />
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
