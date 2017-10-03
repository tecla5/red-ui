<template>
  <div class="red-ui-typedInput" ref="typedInput">
    <h3>typedInput</h3>
  </div>
</template>
<script>
const log = console.log
import typedInput from './controllers/typedInput'
import {
  default as $
}
  from 'jquery';

// TODO: pass Singleton instance
const RED = {
  utils: {}
}
typedInput(RED)

export default {
  name: 'typedInput',
  mounted() {
    log('typedInput')

    const options = {}

    // let element = this.$el.querySelector('.red-ui-typedInput')
    let element = this.$refs.typedInput
    if (element) {
      log(element)
      $(element).typedInput(options)
    } else {
      log('missing element: .red-ui-typedInput', element, this.$el)
    }
  }
}
</script>

<style lang="scss" src="./styles/typedInput.scss"></style></style>
