<template>
  <div id="editor-stack">
  </div>
</template>
<script>
const log = console.log
import { Editor } from './controllers/editor'

export default {
  name: 'editor',
  mounted() {
    log('editor')
    new Editor()
  }
}
</script>

<style lang="scss" src="./styles/editor.scss">

</style>
