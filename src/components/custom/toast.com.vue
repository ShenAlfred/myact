<template>
  <transition name="fade">
    <div class="toast" v-show="showValue">
      {{ tipText }}
    </div>
  </transition>
</template>
<style>
    .toast {
      position: fixed;
      bottom: 80px;
      background: rgba(0,0,0,.5);
      padding: 5px 2px;
      border-radius: 5px;
      text-align:center;
      font-size: 12px;
      left: 50%;
      margin-left: -90px;
      width: 180px;
      color: #fff;
    }
</style>
<script>
  export default{
    data() {
      return {
        showValue: false
      }
    },
    props: {
      tipText: String,
      value: Boolean,
      closeTime: String
    },
    mounted () {
    },
    methods: {
       autoHide() {
         this.timer = setInterval(() => {
          this.showValue = false;
         }, Number(this.closeTime * 1000));
       }
    },
    watch: {
      value (val) {
        this.showValue = val
        if(val) {
          this.autoHide();
        }
      },
      showValue (val) {
        if(val === false) {
          this.timer && clearInterval(this.timer)
          this.timer = null
        }
        this.$emit('input', val);
      }
    }
  }
</script>
