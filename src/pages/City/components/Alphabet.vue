<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="item in letters"
          :key="item"
          :ref="item"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    //数据更新后，计算A字母距离当前列表顶部的距离（这样只需要获取一次即可得到startY的大小，避免重复获取导致数据赘余）
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
    },

    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick(e) {
        //点击字母，向外触发一个‘change’事件，当这个事件触发时，事件处理函数会得到 ‘e.target.textContent’这个数据
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus = true) {
          //使用计时器进行函数节流
          //性能优化，延迟16毫秒进行数据渲染，如果在16毫秒内进行连续拖动，则前一次的操作会被后一次操作覆盖掉，直接显示16毫秒后的数据，从而减少练习渲染导致数据过多的后果
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            //计算手指触碰的位置距离手机顶部的距离-顶部组件的距离=距离当前列表的距离
            const touchY = e.touches[0].clientY - 75
            //计算当前手指所指的index
            const index = Math.floor((touchY - this.startY) / 20)
            //拖动字母时，也向外触发一个‘change’事件，
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)

        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      },
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~css/variables.styl"

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem

    .item
      line-height: .4rem
      text-align: center
      color: $bgColor;
</style>
