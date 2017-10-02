<template>
  <div class="red-ui-editableList">
  </div>
</template>
<script>
const log = console.log
import editableList from './controllers/editableList'

export default {
  name: 'editableList',
  created() {
    log('editableList')
    let options = {}
    this.$el.querySelector('.red-ui-editableList').editableList(options)
  }
}
</script>

<style lang="scss" src="./styles/editableList.scss"></style></style>
