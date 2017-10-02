<template>
  <div class="red-ui-menu">
    <h3>menu</h3>
  </div>
</template>
<script>
const log = console.log
import menu from './controllers/menu'

export default {
  name: 'menu',
  ready() {
    log('menu')
    let options = {}
    this.$el.querySelector('.red-ui-menu').menu(options)
  }
}
</script>

<style lang="scss">

</style>
