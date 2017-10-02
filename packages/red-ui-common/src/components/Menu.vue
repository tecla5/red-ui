<template>
  <div class="red-ui-menu">
  </div>
</template>
<script>
const log = console.log
import menu from './controllers/menu'

export default {
  name: 'menu',
  created() {
    log('menu')
    let options = {}
    this.$el.querySelector('.red-ui-menu').menu(options)
  }
}
</script>

<style lang="scss">

</style>
