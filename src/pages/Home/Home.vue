<template>
    <div>
      <Header/>
      <Swiper/>
      <Icon/>
      <Hot/>
      <Recommend/>

    </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/Swiper'
  import Icon from './components/Icon'
  import Recommend from './components/Recommend'
  import Hot from './components/Hot'
    export default {
      components:{
        Header,
        Swiper,
        Icon,
        Hot,
        Recommend
      }
    }
</script>

<style rel="stylesheet/stylus">

</style>
