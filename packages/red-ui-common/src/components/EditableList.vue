<template>
  <div class="red-ui-editableList">
    <h3>editableList</h3>
  </div>
</template>
<script>
const log = console.log
import editableList from './controllers/editableList'

export default {
  name: 'editableList',
  ready() {
    log('editableList')
    let options = {}
    this.$el.querySelector('.red-ui-editableList').editableList(options)
  }
}
</script>

<style lang="scss" src="./styles/editableList.scss"></style>
