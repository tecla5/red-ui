<template>
  <div class="red-ui-panel">
  </div>
</template>
<script>
import panel from './controllers/panel'

export default {
  name: 'panel',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-panel').panel(options)
  }
}
</script>

<style lang="scss">

</style>
