<template>
  <div class="red-ui-checkboxSet">
    <h3>checkboxSet</h3>
  </div>
</template>
<script>
const log = console.log
import checkboxSet from './controllers/checkboxSet'
import './styles/checkboxSet.scss'

export default {
  name: 'checkboxSet',
  ready() {
    log('checkboxSet')
    let options = {}
    this.$el.querySelector('.red-ui-checkboxSet').checkboxSet(options)
  }
}
</script>


