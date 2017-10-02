<template>
  <div id="app">
    <red-checkbox-set />
    <red-editable-list />
  </div>
</template>

<script>
import CheckboxSet from './CheckboxSet'
import EditableList from './EditableList'
// ...

export default {
  name: 'app',
  components: {
    'red-checkbox-set': CheckboxSet,
    'red-editable-list': EditableList,
    // ...
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>
