<template>
  <div class="red-ui-stack">
    <h3>stack</h3>
  </div>
</template>
<script>
const log = console.log
import stack from './controllers/stack'

export default {
  name: 'stack',
  ready() {
    log('stack')
    let options = {}
    this.$el.querySelector('.red-ui-stack').stack(options)
  }
}
</script>

<style lang="scss">

</style>
