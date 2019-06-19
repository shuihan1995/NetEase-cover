<template>
  <nav class="footer_guide">
    <a href="javascript:;" class="item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
      <i class="iconfont icon-jiantou-"></i>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="item" :class="{on: '/categorys'===$route.path}" @click="goTo('/categorys')">
      <i class="iconfont icon-jiantou-"></i>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="item" :class="{on: '/shops'===$route.path}" @click="goTo('/shops')">
      <i class="iconfont icon-jiantou-"></i>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="item" :class="{on: '/cart'===$route.path}" @click="goTo('/cart')">
      <i class="iconfont icon-jiantou-"></i>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="item" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
      <i class="iconfont icon-jiantou-"></i>
      <span>个人</span>
    </a>
  </nav>
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
  .footer_guide
    top-border-1px(#d9d9d9)
    position fixed
    z-index 5
    left 0
    bottom 0
    background-color #fff
    width 750px
    height 98px
    display flex
    align-items center
    .item
      width 20%
      display flex
      flex-direction column
      text-align center
      color #999
      &.on
        color #b4282d
      .iconfont
        font-size 28px
        width 150px
        height 40px
        display inline-block
        vertical-align middle
      span
        font-size 24px
        display block
        margin-top 7px
        line-height 1px

</style>