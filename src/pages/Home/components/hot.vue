<template>
    <div>
      <div class="title">
        <img class="title-avatar" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        <p class="title-content">本周热门榜单</p>
      </div>

      <ul class="hot">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="item" v-for="item in page" :key="item.id">
              <img class="item-img-url" :src="item.imageUrl" alt="">
              <p class="item-title">{{item.title}}</p>
              <div class="item-cost">￥<p class="item-cost-number">{{item.cost}}</p>起</div>
            </div>
          </swiper-slide>

        </swiper>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          swiperOption:{
            pagination:'.swiper-pagination',
            loop:true
          },
        }
      },
      props:{
        hotList:Array
      },
      computed:{
        pages(){
          const pages=[]
          this.hotList.forEach((item,index)=>{
            const page=Math.floor(index/3)
            if (!pages[page]){
              pages[page]=[]
            }
            pages[page].push(item)
          })
          return pages
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

  .hot
    overflow: hidden
    height:3.1rem
    .item
      float: left
      display: flex
      height:3.1rem
      margin: .05rem
      width:2rem
      flex-direction column
      align-items center
      .item-img-url
        width: 2rem
        height: 2rem
        margin-top .2rem
      .item-title
        margin:.1rem
      .item-cost
        display: flex
        align-items center
        .item-cost-number
          color:  #ff8300
          font-size:  .36rem

</style>
