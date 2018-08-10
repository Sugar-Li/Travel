<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="(item,index) in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imageUrl" alt="">
          </div>
          <p class="icon-content">{{item.content}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
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
        swiperList:[
          {
            id:'0001',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            content:'热门景点'
          },
          {
            id:'0002',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            content:'文化古迹'
          },
          {
            id:'0003',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            content:'一日游'
          },
          {
            id:'0004',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            content:'游乐场'
          },
          {
            id:'0005',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
            content:'夏日戏水'
          },
          {
            id:'0006',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
            content:'夫子庙'
          },
          {
            id:'0007',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
            content:'总统府'
          },
          {
            id:'0008',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            content:'中山陵'
          },
          {
            id:'0009',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            content:'万达主题乐园'
          },
          {
            id:'0010',
            imageUrl:'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
            content:'牛首山'
          },

        ]
      }
    },
    computed:{
      //将给定的一维数组swiperList转换成多维数组pages
      pages(){
        const pages=[]
        this.swiperList.forEach((item,index)=>{
          //根据index将swiperList的对象划分page属性
          const page=Math.floor(index/8)
          //根据page属性将不同的对象投入到不同的小数组中
          //判断当前的pages数组是否存在，如果没有存在，则创建一个新的空小数组
          if (!pages[page]) {
            pages[page]=[]
          }
          //根据对象的page属性将对象push到对应的小数组中
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~css/variables.styl"
  @import "~css/mixins.styl"

  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing:border-box
        padding:.1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%

      .icon-content
        position: absolute
        bottom:0
        left: 0
        right: 0
        height:.44rem
        line-height:.44rem
        text-align: center
        color:$darkTextColor
        ellipsis()
</style>
