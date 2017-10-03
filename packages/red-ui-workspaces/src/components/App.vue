<template>
  <div id="app">
    <red-workspaces />
  </div>
</template>

<script>
import { Workspaces } from './controllers/workspaces'

export default {
  name: 'app',
  components: {
    'red-workspaces': Workspaces
  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>

</style>
