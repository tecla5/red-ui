<template>
  <div class="red-ui-checkboxSet">
  </div>
</template>
<script>
import checkboxSet from './controllers/checkboxSet'

export default {
  name: 'CheckboxSet',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-checkboxSet').checkboxSet(options)
  }
}
</script>

<style lang="scss" src="./styles/searchBox.scss"></style>
