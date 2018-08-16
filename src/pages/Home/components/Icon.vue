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
      }
    },
    props:{
      iconList:Array
    },
    computed:{
      //将给定的一维数组iconList转换成多维数组pages
      pages(){
        const pages=[]
        this.iconList.forEach((item,index)=>{
          //根据index将iconList的对象划分page属性
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~css/variables.styl"
  @import "~css/mixins.styl"

  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    margin-top  : .1rem
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
