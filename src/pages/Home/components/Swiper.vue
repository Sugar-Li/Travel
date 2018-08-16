<template>

  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imageUrl" alt="">
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
            loop:true,

          },
        }
      },
      props:{
        swiperList:Array
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
