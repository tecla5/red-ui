<template>
  <div id="app">
    <h3>Node Diff app</h3>
    <red-node-diff />
  </div>
</template>

<script>
import Diff from './Diff.vue'
export default {
  name: 'app',
  components: {
    'red-node-diff': Diff
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>
