<template>
  <div>
    <a-dialog v-model="showValue">
      <div style="height: 200px; background: #333; color: #fff">
        confirm
      </div>
      <div style="height: 50px; overflow: hidden;">
        <div style="float: left; width: 50%; height: 100%; text-align: center;" @click="_confirm">确定</div>
        <div style="float: left; width: 50%; height: 100%; text-align: center;" @click="_cancel">取消</div>
      </div>
    </a-dialog>
  </div>
</template>
<style>

</style>
<script>
    import ADialog from "./ADialog.vue";

    export default {
      props: {
        value: Boolean,
        default: false
      },
      data () {
        return {
          showValue: false
        }
      },
      created () {

      },
      watch: {
        value (val) {
          this.showValue = val;
        },
        showValue (val) {
          this.$emit('input', val)
        }
      },
      methods: {
        _confirm () {
          this.showValue = false;
        },
        _cancel () {
          this.showValue = false;
        }
      },
      components: {
        ADialog
      }
    }
</script>
