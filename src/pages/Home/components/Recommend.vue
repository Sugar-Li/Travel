<template>
  <div>
    <div class="title">
      <img class="title-avatar" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      猜你喜欢
    </div>

    <ul>
      <li class="item border-bottom" v-for="(recommend,index) in recommendList" :key="recommend.id">
        <img class="item-img"
             :src="recommend.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{recommend.info.title}}</p>
          <div class="item-score">
            <Stars class="item-score-star" :score="5"/>
            <p class="item-score-comment">111条评论</p>
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
    data(){
      return{
        recommendList:[
          {
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
            info:{
              title:'上海迪士尼乐园',
              cost:95,
              addr:'浦东新区'
            }
          },
          {
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
            info:{
              title:'上海迪士尼乐园',
              cost:95,
              addr:'浦东新区'
            }
          },
          {
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
            info:{
              title:'上海迪士尼乐园',
              cost:95,
              addr:'浦东新区'
            }
          }
        ]
      }
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
    .title-avatar
      height: .28rem
      width: .28rem
      line-height: .28rem
      height: .28rem

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
