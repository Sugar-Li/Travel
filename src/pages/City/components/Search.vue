<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~css/variables.styl"
  .search
    height: .72rem
    padding: 0 .1rem
    background:$bgColor
    .search-input
      box-sizing border-box
      padding:0 .1rem
      height: .64rem
      line-height: .64rem
      text-align :center
      width:100%


</style>
