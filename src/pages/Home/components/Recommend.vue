<template>
  <div>
    <div class="title">
      <img class="title-avatar" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
     <p class="title-content">猜你喜欢</p>
    </div>

    <ul>
      <li class="item border-bottom" v-for="(recommend,index) in recommendList" :key="recommend.id">
        <img class="item-img"
             :src="recommend.imageUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{recommend.info.title}}</p>
          <div class="item-score">
            <Stars class="item-score-star" :score="recommend.info.score"/>
            <p class="item-score-comment">{{recommend.info.account}}条评论</p>
          </div>
          <div class="item-cost-addr">
            <div class="item-cost">￥<p class="item-cost-number">{{recommend.info.cost}}</p>起</div>
            <p class="item-addr">{{recommend.info.addr}}</p>
          </div>

        </div>
      </li>
    </ul>

  </div>

</template>

<script>
  import Stars from './Stars/Stars.vue'

  export default {
    props:{
      recommendList:Array
    },
    components: {
      Stars
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    display flex
    align-items center
    .title-avatar
      height: .28rem
      width: .28rem
      line-height: .28rem
      height: .28rem
      margin-left:.1rem
    .title-content
      font-size:.32rem

  .item
    display: flex
    height: 2.4rem
    overflow hidden
    margin-left: .2rem
    .item-img
      width: 2rem
      height: 2rem
      line-height: 2rem
      margin: .2rem
    .item-info
      flex: 1
      display: flex
      flex-direction column
      margin-top: .2rem
      .item-title
        font-size .36rem
        margin-top: .26rem
      .item-score
        margin-top: .26rem
        display flex
        .item-score-comment
          flex: 1
          text-align: center

      .item-cost-addr
        flex 1
        margin-top: .2rem
        display: flex
        align-items center
        .item-cost
          display: flex
          align-items center
          .item-cost-number
            color:  #ff8300
            font-size:  .36rem
        .item-addr
          flex:1
          text-align right
          margin-right:.2rem

</style>
