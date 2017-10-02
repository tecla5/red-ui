<template>
  <div class="red-ui-typedInput">
  </div>
</template>
<script>
const log = console.log
import typedInput from './controllers/typedInput'

export default {
  name: 'typedInput',
  created() {
    log('typedInput')
    let options = {}
    this.$el.querySelector('.red-ui-typedInput').typedInput(options)
  }
}
</script>

<style lang="scss" src="./styles/typedInput.scss"></style></style>
