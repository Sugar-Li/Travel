<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe615;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      city: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~css/variables.styl"

  .header
    display: flex
    line-height:$headerHeight
    background-color: $bgColor;
    color: #fff;
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin: .12rem 0 0 .2rem
      background: #ffffff
      border-radius .1rem
      padding-left: .2rem
      color: #ccc;
    .header-right
      color: #fff
      width 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .2rem
</style>
