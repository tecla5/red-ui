<template>
  <div class="red-ui-panel" id="my-panel">
  </div>
</template>
<script>
// <h3>panel</h3>
const log = console.log
import { Panel } from './controllers/panel'

export default {
  name: 'panel',
  mounted() {
    log('panel')
    let options = {
      id: 'my-panel'
    }
    new Panel(options)
  }
}
</script>

<style lang="scss">

</style>
