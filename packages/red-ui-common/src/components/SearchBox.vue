<template>
  <div class="red-ui-searchBox">
  </div>
</template>
<script>
const log = console.log
import searchBox from './controllers/searchBox'

export default {
  name: 'searchBox',
  created() {
    log('searchBox')
    let options = {}
    this.$el.querySelector('.red-ui-searchBox').searchBox(options)
  }
}
</script>

<style lang="scss" src="./styles/searchBox.scss"></style>

