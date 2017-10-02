<template>
  <div class="red-ui-searchBox">
  </div>
</template>
<script>
import searchBox from './controllers/searchBox'

export default {
  name: 'searchBox',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-searchBox').searchBox(options)
  }
}
</script>

<style lang="scss" src="./styles/searchBox.scss"></style>

