<template>
  <div class="red-ui-panel">
  </div>
</template>
<script>
const log = console.log
import panel from './controllers/panel'

export default {
  name: 'panel',
  created() {
    log('panel')
    let options = {}
    this.$el.querySelector('.red-ui-panel').panel(options)
  }
}
</script>

<style lang="scss">

</style>
