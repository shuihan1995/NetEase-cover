<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye1"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: '/categorys'===$route.path}" @click="goTo('/categorys')">
      <span class="item_icon">
        <i class="iconfont icon-huaban"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: '/shops'===$route.path}" @click="goTo('/shops')">
      <span class="item_icon">
        <i class="iconfont icon-huaban"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on: '/cart'===$route.path}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-icon-test"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-weibiaoti-"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
export default {
  name: 'FooterGuide',
  data() { 
    return {

    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#d9d9d9)
    position fixed
    z-index 5
    left 0
    bottom 0
    background-color #fff
    width 750px
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px

</style>