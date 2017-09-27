<template>
  <div class="red-ui-stack">
  </div>
</template>
<script>
import stack from '../controllers/stack'

export default {
  name: 'stack',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-stack').stack(options)
  }
}
</script>

<style lang="scss">

</style>
