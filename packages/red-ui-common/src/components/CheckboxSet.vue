<template>
  <div class="red-ui-checkboxSet">
  </div>
</template>
<script>
import checkboxSet from '../controllers/checkboxSet'

export default {
  name: 'CheckboxSet',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-checkboxSet').checkboxSet(options)
  }
}
</script>

<style lang="scss">
// Extracted from SASS file in /assets folder of red-editor
// How to use SCSS in Vue 2
// https://medium.com/@mahesh.ks/using-sass-scss-in-vue-js-2-d472af0facf9
.red-ui-checkboxSet {
  width: 15px;
  display: inline-block;
  color: #888;
  cursor: pointer;
  input {
    display: none;
  }

  &.disabled {
    pointer-events: none;
    color: #ddd;
  }
}
</style>
