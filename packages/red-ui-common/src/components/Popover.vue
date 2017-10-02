<template>
  <div class="red-ui-popover">
  </div>
</template>
<script>
const log = console.log
import popover from './controllers/popover'

export default {
  name: 'popover',
  created() {
    log('popover')
    let options = {}
    this.$el.querySelector('.red-ui-popover').popover(options)
  }
}
</script>

<style lang="scss">
.red-ui-popover {
  display: none;
  position: absolute;
  width: auto;
  padding: 10px;
  height: auto;
  background: #fff;

  z-index: 1000;
  font-size: 14px;
  line-height: 1.4em;
  @include component-shadow;
}

.red-ui-popover:after,
.red-ui-popover:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.red-ui-popover.red-ui-popover-right:after,
.red-ui-popover.red-ui-popover-right:before {
  right: 100%;
}

.red-ui-popover.red-ui-popover-left:after,
.red-ui-popover.red-ui-popover-left:before {
  left: 100%;
}


.red-ui-popover.red-ui-popover-right:after {
  border-color: rgba(136, 183, 213, 0);
  border-right-color: #fff;
  border-width: 10px;
  margin-top: -10px;
}

.red-ui-popover.red-ui-popover-right:before {
  border-color: rgba(194, 225, 245, 0);
  border-right-color: $primary-border-color;
  border-width: 11px;
  margin-top: -11px;
}

.red-ui-popover.red-ui-popover-left:after {
  border-color: rgba(136, 183, 213, 0);
  border-left-color: #fff;
  border-width: 10px;
  margin-top: -10px;
}

.red-ui-popover.red-ui-popover-left:before {
  border-color: rgba(194, 225, 245, 0);
  border-left-color: $primary-border-color;
  border-width: 11px;
  margin-top: -11px;
}

.red-ui-popover-size-small {
  font-size: 11px;
  padding: 5px;

  &.red-ui-popover-right:after {
    border-width: 5px;
    margin-top: -5px;
  }
  &.red-ui-popover-right:before {
    border-width: 6px;
    margin-top: -6px;
  }

  &.red-ui-popover-left:after {
    border-width: 5px;
    margin-top: -5px;
  }
  &.red-ui-popover-left:before {
    border-width: 6px;
    margin-top: -6px;
  }
}
</style>
