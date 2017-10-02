<template>
  <div id="workspace">
    <ul id="workspace-tabs"></ul>
    <div id="chart" tabindex="1"></div>
    <div id="workspace-toolbar"></div>
    <div id="workspace-footer">
      <a class="workspace-footer-button" id="btn-zoom-out" href="#">
        <i class="fa fa-minus"></i>
      </a>
      <a class="workspace-footer-button" id="btn-zoom-zero" href="#">
        <i class="fa fa-circle-o"></i>
      </a>
      <a class="workspace-footer-button" id="btn-zoom-in" href="#">
        <i class="fa fa-plus"></i>
      </a>
    </div>
    <div id="editor-shade" class="hide"></div>
  </div>
</template>
<script>
export default {
  name: 'workspace',
  created() {
  }
}
</script>

<style lang="scss">

</style>
