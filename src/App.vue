<template>
  <div id="app">
  <router-view/>
  <FooterGuide v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
