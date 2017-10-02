<template>
  <div id="palette">
    <img src="red/images/spin.svg" class="palette-spinner hide" />
    <div id="palette-search" class="palette-search hide">
      <input type="text" data-i18n="[placeholder]palette.filter"></input>
    </div>
    <red-palette-editor />
    <div id="palette-container" class="palette-scroll hide"></div>
    <div id="palette-footer">
      <a class="palette-button" id="palette-collapse-all" href="#">
        <i class="fa fa-angle-double-up"></i>
      </a>
      <a class="palette-button" id="palette-expand-all" href="#">
        <i class="fa fa-angle-double-down"></i>
      </a>
    </div>
    <div id="palette-shade" class="hide"></div>
  </div>
</template>
<script>
const log = console.log
import PaletteEditor from './PaletteEditor'
export default {
  name: 'palette',
  components: {
    'red-palette-editor': PaletteEditor
  },
  created() {
    log('palette')
  }
}
</script>

<style lang="scss" src="./styles/palette.scss">

</style>
