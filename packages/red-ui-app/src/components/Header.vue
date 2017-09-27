<template>
  <div id="header">
    <span class="logo">
      <a :href="header.url">
        <img :src="header.image.src" :title="header.image.version">
        <span>{{ header.title }}</span>
        <a id="btn-login" class="btn btn-primary">{{ header.action.title }}</a>
      </a>
    </span>
    <ul class="header-toolbar hide">
      <li>
        <a id="btn-sidemenu" class="button" data-toggle="dropdown" href="#">
          <i class="fa fa-bars"></i>
        </a>
      </li>
    </ul>
    <div id="header-shade" class="hide"></div>
  </div>
</template>
<script>
import sidebar from './controllers/sidebar'

export default {
  name: 'sidebar',
  created() {
    let options = {}
    this.$el.querySelector('#sidebar').sidebar(options)
  }
}
</script>

<style lang="scss">

</style>
