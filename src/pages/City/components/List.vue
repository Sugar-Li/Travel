<template>
  <div class="list" ref="wrapper">
    <div>
      <Section class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </Section>
      <Section class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </Section>
      <Section class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
        </div>
      </Section>
      <Section class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
        </div>
      </Section>
      <Section class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
          <div class="item border-bottom">安倍额</div>
        </div>
      </Section>

    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.scroll=new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~css/variables.styl"
  .border-topbottom
    &::before
      border-color: #ccc
    &::after
      border-color: #ccc
  .border-bottom
    &::before
      border-color: #ccc
  .list
    position: absolute;
    overflow: hidden
    top: 1.58rem
    bottom: 0
    left: 0
    right:0
    .title
      line-height: .54rem
      background: #eee;
      padding-left .2rem
      color: #666

    .button-list
      /*清除浮动*/
      overflow hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%;
        float: left
        .button
          margin: .1rem
          padding: .1rem 0
          text-align center
          border: .02rem solid #ccc
          border-radius .06rem

    .item-list
      .item
        line-height:.76rem
        padding-left:.2rem
</style>
