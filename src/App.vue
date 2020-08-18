<template>
  <div class="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    Footer: () => import("./components/Footer.vue"),
  }
})
</script>

<style lang="less" scoped>
.app {
  position: relative;
  height: 100%;
}
</style>