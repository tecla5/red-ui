<template>
  <div id="app">
    <red-header />
    <red-main-container />
    <red-notifications />
    <red-drop-target />
    <red-confirm-deploy />
  </div>
</template>

<script>
const log = console.log
import Header from '@tecla5/red-ui-header/src/components/Header'
import MainContainer from '@tecla5/red-ui-main-container/src/components/MainContainer'
import Notifications from './Notifications'
// import Notifications from 'red-ui-notifications/components/Notifications'
import DropTarget from './DropTarget'
import ConfirmDeploy from './ConfirmDeploy'

export default {
  name: 'mainContainer',
  components: {
    'red-header': Header,
    'red-main-container': MainContainer,
    'red-notifications': Notifications,
    'red-drop-target': DropTarget,
    'red-confirm-deploy': ConfirmDeploy
  },
  created() {

  }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<!-- Global CSS -->
<style>

</style>
