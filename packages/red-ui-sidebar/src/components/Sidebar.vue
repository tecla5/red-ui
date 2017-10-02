<template>
  <div id="sidebar">
    <ul id="sidebar-tabs"></ul>
    <div id="sidebar-content"></div>
    <div id="sidebar-footer"></div>
    <div id="sidebar-shade" class="hide"></div>
  </div>
  </div>
</template>
<script>
const log = console.log
// import sidebar from './controllers/sidebar'

export default {
  name: 'sidebar',
  created() {
    log('sidebar')
    let options = {}
    // this.$el.querySelector('#sidebar').sidebar(options)
  }
}
</script>

<style lang="scss" src="./styles/sidebar.scss">

</style>
