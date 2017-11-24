# ade-vue-dynamic-form

> Create a dynamic form usign a set of custom Vue.js components

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## usage

> import the component into your main script

```
import VueDynamicForm from 'ade-vue-dynamic-form'
Vue.use(VueDynamicForm)
```

> add the 'df-form' tag and bind 'templates' and 'onSubmit' attribute

```
<df-form :templates="templates" :onSubmit="onSubmit" />
```

- the 'template' attribute must be an array with the field required
- the 'onSubmit' attribute must be your return custom function
