<template>
<div id="app">
  <df-form :templates="templates" :onSubmit="onSubmit" />
</div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      templates: [
        {
          type: 'text',
          value: 'value text',
          maxLength: '10',
          required: true
        }, {
          type: 'text',
          value: 'value text 2'
        }, {
          type: 'textarea',
          value: 'value textarea',
          maxLength: '20'
        }, {
          type: 'image',
          value: 'http://www.tutorialsavvy.com/wp-content/uploads/2015/10/image_thumb23.png'
        }
      ]
    }
  },

  methods: {
    onSubmit () {
      this.templates.map(function (template) {
        console.log(template.type + ', ' + template.value)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
