<template>
  <div class="syc-dialog" v-show="currentValue">
    <div class="dialogClass">
      <slot></slot>
    </div>
  </div>
</template>
<style>
  .dialogClass {
    position: fixed;
    z-index: 5000;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #fff;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
  }
</style>
<script>
    export default {
      props: {
        value: Boolean,
        default: false
      },
      watch: {
        value (val) {
          this.currentValue = val;
        },
        currentValue (val) {
          this.$emit(val ? 'on-show' : 'on-hide');
          this.$emit("input", val);
        }
      },
      data () {
        return {
          currentValue: false
        }
      },
      mounted () {
      },
      components: {}
    }
</script>
