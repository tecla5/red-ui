<template>
  <div class="red-ui-editableList">
  </div>
</template>
<script>
import editableList from './controllers/editableList'

export default {
  name: 'editableList',
  created() {
    let options = {}
    this.$el.querySelector('.red-ui-editableList').editableList(options)
  }
}
</script>

<style lang="scss" src="./styles/editableList.scss"></style></style>
