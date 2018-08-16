<template>

    <div class="header">
      城市选择
      <router-link to="/">
      <div class="iconfont city-back">&#xe624;</div>
      </router-link>

    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "~css/variables.styl"

  .header
    position: relative;
    overflow: hidden
    height:$headerHeight
    line-height:$headerHeight
    background:$bgColor;
    text-align: center;
    color: #fff
    font-size .32rem
    .city-back
      position: absolute
      left: 0
      top: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff

</style>
