<template>
  <div class="red-ui-popover">
    <h3>popover</h3>
  </div>
</template>
<script>
const log = console.log
import popover from './controllers/popover'
import './styles/popover.scss'

export default {
  name: 'popover',
  ready() {
    log('popover')
    let options = {}
    this.$el.querySelector('.red-ui-popover').popover(options)
  }
}
</script>


