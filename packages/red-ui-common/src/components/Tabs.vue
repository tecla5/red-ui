<template>
  <div class="red-ui-tabs">
    <h3>tabs</h3>
  </div>
</template>
<script>
const log = console.log
import tabs from './controllers/tabs'
import './styles/tabs.scss'

export default {
  name: 'tabs',
  ready() {
    log('tabs')
    let options = {}
    this.$el.querySelector('.red-ui-tabs').tabs(options)
  }
}
</script>
