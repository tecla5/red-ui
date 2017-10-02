<template>
  <div class="red-ui-tabs">
  </div>
</template>
<script>
const log = console.log
import tabs from './controllers/tabs'
import './styles/tabs.scss'

export default {
  name: 'tabs',
  created() {
    log('tabs')
    let options = {}
    this.$el.querySelector('.red-ui-tabs').tabs(options)
  }
}
</script>
