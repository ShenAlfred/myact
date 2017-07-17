<template>
  <div>
    <h1>子组件:</h1>
    <span>{{ number }}</span>
    <button @click="showDialog">show dialog</button>
    <a-dialog v-model="show" @input="eventInput">
      <div style="height: 350px;background: #000; color: #fff;">
        Dialog
      </div>
      <div style="text-align: center; color: #333; height: 45px;" @click="close">
        close
      </div>
    </a-dialog>
    <button @click="showConfirm">show confirm</button>
    <a-confirm v-model="show2"></a-confirm>
  </div>
</template>
<style>

</style>
<script>
    import ADialog from './dialog/ADialog.vue'
    import AConfirm from './dialog/AConfirm.vue'

    export default {
      data () {
        return {
          show: false,
          show2: false
        }
      },
      components: {
        ADialog,
        AConfirm
      },
      methods: {
        showDialog () {
          this.show = !this.show;
        },
        showConfirm () {
          this.show2 = !this.show2;
        },
        close () {
          this.show = false;
        },
        eventInput (val) {
          console.log("event: " + val)
        }
      },
      computed: {
        number () {
          return this.$store.state.count
        }
      }
    }
</script>
