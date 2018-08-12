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
              <img class="item-img-url" :src="item.imgUrl" alt="">
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
          hotList:[
            {
              id:'0001',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg',
              title:'南京总统府1',
              cost:38
            },
            {
              id:'0002',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg',
              title:'南京总统府2',
              cost:38
            },
            {
              id:'0003',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg',
              title:'南京总统府3',
              cost:38
            },
            {
              id:'0004',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg',
              title:'南京总统府4',
              cost:38
            },
            {
              id:'0005',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_150x150_eab8097d.jpg',
              title:'南京总统府5',
              cost:38
            },
          ]
        }
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
