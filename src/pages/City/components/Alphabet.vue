<template>
  <div>
    <ul class="list">
      <li class="item"  v-for="(items,key) in cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
  props:{
    cities:Object
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~css/variables.styl"

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right:0
    bottom:0
    width: .4rem

    .item
      line-height: .4rem
      text-align: center
      color: $bgColor;
</style>
