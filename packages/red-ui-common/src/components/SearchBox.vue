<template>
  <div class="red-ui-searchBox">
    <h3>searchBox</h3>
  </div>
</template>
<script>
const log = console.log
import searchBox from './controllers/searchBox'
import './styles/searchBox.scss'

export default {
  name: 'searchBox',
  ready() {
    log('searchBox')
    let options = {}
    this.$el.querySelector('.red-ui-searchBox').searchBox(options)
  }
}
</script>


