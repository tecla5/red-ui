<template>
  <div class="red-ui-checkboxSet">
  </div>
</template>
<script>
const log = console.log
import checkboxSet from './controllers/checkboxSet'
import './styles/checkboxSet.scss'

export default {
  name: 'checkboxSet',
  created() {
    log('checkboxSet')
    let options = {}
    this.$el.querySelector('.red-ui-checkboxSet').checkboxSet(options)
  }
}
</script>


