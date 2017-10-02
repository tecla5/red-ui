<template>
  <div class="red-ui-typedInput">
  </div>
</template>
<script>
import typedInput from './controllers/typedInput'

export default {
  name: 'typedInput',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-typedInput').typedInput(options)
  }
}
</script>

<style lang="scss" src="./styles/typedInput.scss"></style></style>
