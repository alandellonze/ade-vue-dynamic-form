<template>
<div>
  <el-card>
    <el-form label-width="120px" :model="dynamicForm">
      <!-- generate all the input in the dynamicForm -->
      <div v-for="(field, index) in dynamicForm.fields">

        <df-text v-if="field.type === 'text'" :language="language" :field="field" :index="index"></df-text>
        <df-textarea v-if="field.type === 'textarea'" :language="language" :field="field" :index="index"></df-textarea>
        <df-image v-if="field.type === 'image'" :language="language" :field="field" :index="index"></df-image>
      </div>

      <!-- submit button -->
      <el-button type="success" icon="el-icon-success" v-on:click.prevent="innerOnSubmit">submit</el-button>
    </el-form>
  </el-card>
</div>
</template>

<script>
export default {
  props: ['language', 'dynamicForm', 'onSubmit'],

  methods: {
    completition: function () {
      let total = 0
      let self = this
      this.dynamicForm.fields.map(function (field) {
        let val = field.values[self.language]
        if (val !== null && val !== undefined && val !== '') {
          total++
        }
      })
      let perc = ((total / this.dynamicForm.fields.length) * 100).toFixed(2)
      console.log('for language "' + this.language + '", completed: ' + total + '/' + this.dynamicForm.fields.length + ', ' + perc + '%')
      return perc
    },

    innerOnSubmit: function () {
      console.log(this.completition())
      this.onSubmit()
    }
  }
}
</script>

<style scoped>
</style>
