<template>
  <div class="red-ui-menu">
  </div>
</template>
<script>
import menu from '../controllers/menu'

export default {
  name: 'menu',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-menu').menu(options)
  }
}
</script>

<style lang="scss">

</style>
