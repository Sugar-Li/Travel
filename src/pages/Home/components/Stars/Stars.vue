<template>
  <div class="star star-24">
    <span class="star-item" v-for="(StarsClass,index) in StarsClasses" :class="StarsClass" :key="index"></span>

  </div>
</template>

<script>
    export default {
      props:{
        score:Number,
      },
      computed:{
        StarsClasses(){
          const {score}=this
          const scs=[]
          //向scs中添加n个'on'
          const scoreInteger=Math.floor(score)
          for (let i=0;i<scoreInteger;i++){
            scs.push('on')
          }
          //向scs中添加0/1个'half'

          if (score*10-scoreInteger*10>=5){//小数计算不精确
            scs.push('half')
          }
          //向scs中添加n个'off'
          const offCount=5-scs.length
          for (let i=0;i<offCount;i++){
            scs.push('off')
          }
          return scs
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '~css/mixins.styl'

    .star
      float left
      font-size 0
      .star-item
        display inline-block
        background-repeat no-repeat
      &.star-24
        .star-item
          width 10px
          height 10px
          margin-right 3px
          background-size 10px 10px
          &:last-child
            margin-right 0
          &.on
            bg-image('./images/stars/star24_on')
          &.half
            bg-image('./images/stars/star24_half')
          &.off
            bg-image('./images/stars/star24_off')
</style>
