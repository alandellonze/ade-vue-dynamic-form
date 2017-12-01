<template>
<div id="app">
  <!-- header -->
  <el-header>
    The header
  </el-header>

  <el-container>
    <el-aside width="200px" class="hidden-xs-only">
      <el-menu class="el-menu-vertical-demo" mode="vertical">
        <el-menu-item index="1">
          <i class="el-icon-message"></i>
          <span>Processing Center</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Workspace</span>
          </template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span>Orders</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <el-row>
          <!-- language switch -->
          <el-col>
            <el-button-group>
              <el-button type="primary" size="mini" v-on:click="switchLanguage('it')">it</el-button>
              <el-button type="primary" size="mini" v-on:click="switchLanguage('en')">en</el-button>
            </el-button-group>
          </el-col>

          <!-- dynamic form -->
          <el-col>
            <df-form :language="language" :templates="templates" :onSubmit="onSubmit"></df-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
      <el-footer>
        Footer
      </el-footer>
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
          maxLength: 10
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
          value: 'http://www.tutorialsavvy.com/wp-content/uploads/2015/10/image_thumb23.png',
          size: 100
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
        console.log('it: ' + template.type + ', ' + template.value['it'])
        console.log('en: ' + template.type + ', ' + template.value['en'])
      })
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.el-menu {
  border-right: 0px;  
}

.el-aside {
  color: #333333;
  border-right: solid 1px #E6E6E6;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333333;
  text-align: center;
}

.el-col {
  margin-bottom: 20px;
}
</style>
