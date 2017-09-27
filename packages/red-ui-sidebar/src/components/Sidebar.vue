<template>
  <div class="red-ui-sidebar">
  </div>
</template>
<script>
import sidebar from '../controllers/sidebar'

export default {
  name: 'sidebar',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-sidebar').sidebar(options)
  }
}
</script>

<style lang="scss">

</style>
