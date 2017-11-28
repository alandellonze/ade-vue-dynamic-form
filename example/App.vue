<template>
<div id="app">
  <!-- language switch -->
  <button v-on:click="switchLanguage('it')">it</button>
  <button v-on:click="switchLanguage('en')">en</button>
  <br /><br />

  <!-- dynamic form -->
  <df-form :language="language" :templates="templates" :onSubmit="onSubmit" />
</div>
</template>

<script>
let defaultLanguage = 'it'

export default {
  name: 'app',

  data () {
    return {
      language: defaultLanguage,
      templates: [
        {
          name: 'field1',
          type: 'text',
          label: 'label text',
          value: {
            it: 'value text',
            en: 'en value text'
          },
          required: true,
          maxLength: '10'
        }, {
          name: 'field2',
          type: 'textarea',
          label: 'label textarea',
          value: {
            it: 'it value textarea',
            en: 'en value textarea'
          },
        }, {
          name: 'field3',
          type: 'image',
          label: 'label image',
          value: 'http://www.tutorialsavvy.com/wp-content/uploads/2015/10/image_thumb23.png'
        }
      ]
    }
  },

  methods: {
    switchLanguage (languageSelected) {
      this.language = languageSelected
    },
    onSubmit () {
      let lang = this.language;
      this.templates.map(function (template) {
        console.log(template.type + ', ' + template.value[lang])
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
