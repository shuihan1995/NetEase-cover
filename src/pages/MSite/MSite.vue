<template>
  <div class="msite">
    <MSite_Header/>
  </div>
</template>

<script>
import MSite_Header from '../../components/MSite_Header/MSite_Header.vue'
export default {
  data() { 
    return {

    }
  },
  components: {
    MSite_Header
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.msite
  width 750px
  height 30000px
</style>