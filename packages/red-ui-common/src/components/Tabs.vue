<template>
  <div class="red-ui-tabs" id="my-tabs">
    <h3>tabs</h3>
  </div>
</template>
<script>
const log = console.log
import { Tabs } from './controllers/tabs'
import './styles/tabs.scss'

export default {
  name: 'tabs',
  mounted() {
    log('tabs')
    let options = {
      id: 'my-tabs'
    }
    new Tabs(options)
  }
}
</script>
