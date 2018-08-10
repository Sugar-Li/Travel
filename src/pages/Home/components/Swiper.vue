<template>

  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
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
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/ab/93de82ea87ff4702.jpg_750x200_83a25e9d.jpg"
            },
            {
              id:'0002',
              imgUrl:"http://img1.qunarzz.com/piao/fusion/1808/46/ad623dcbd4663f02.jpg_750x200_7f58a60e.jpg"
            }
          ]
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*由于.swiper-pagination-bullet-active的样式是作用在它的父组件上的，而我们这里限制了只修饰当前组件
  为了能实现功能,`>>>`的方式，表示在 .wrapper下只要存在子组件的类名，即可渲染*/
  .wrapper  >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height:0
    padding-bottom:26.67%
    background: #ccc
    .swiper-img
      width: 100%

</style>
