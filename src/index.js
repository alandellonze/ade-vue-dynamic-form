import FormComponent from './components/FormComponent'
import TextComponent from './components/TextComponent'
import TextareaComponent from './components/TextareaComponent'
import ImageComponent from './components/ImageComponent'

class VueDynamicForm {
  install (Vue) {
    Vue.component('df-form', FormComponent)
    Vue.component('df-text', TextComponent)
    Vue.component('df-textarea', TextareaComponent)
    Vue.component('df-image', ImageComponent)
  }
}

export default (new VueDynamicForm())
