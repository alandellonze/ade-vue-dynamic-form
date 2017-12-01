<template>
<div>
  <el-form label-width="120px">
    <!-- generate all the input in the template -->
    <div v-for="template in templates">
      <df-text v-if="template.type === 'text'" :language="language" :template="template" />
      <df-textarea v-if="template.type === 'textarea'" :language="language" :template="template" />
      <df-image v-if="template.type === 'image'" :template="template" />
    </div>

    <!-- submit button -->
    <el-button type="success" icon="el-icon-success" v-on:click.prevent="innerOnSubmit">submit</el-button>
  </el-form>
</div>
</template>

<script>
export default {
  props: ['language', 'templates', 'onSubmit'],

  methods: {
    innerOnSubmit: function () {
      this.onSubmit()
    }
  }
}
</script>

<style scoped>
</style>
