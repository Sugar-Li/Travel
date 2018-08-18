<template>
    <div>
      <Header :city="city"/>
      <Swiper :swiperList="swiperList"/>
      <Icon :iconList="iconList"/>
      <Hot :hotList="hotList"/>
      <Recommend :recommendList="recommendList"/>

    </div>
</template>

<script>
  import Header from './components/Header'
  import Swiper from './components/Swiper'
  import Icon from './components/Icon'
  import Recommend from './components/Recommend'
  import Hot from './components/Hot'
  import {mapActions} from 'vuex'
  import axios from 'axios'

    export default {
    data(){
     return{
       city:'',
       swiperList:[],
       iconList:[],
       recommendList:[],
       hotList:[],

     }
    },
      components:{
        Header,
        Swiper,
        Icon,
        Hot,
        Recommend
      },
      methods:{
        getHomeInfo(){
          axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
          res=res.data
          if (res.ret&& res.data) {
            const data=res.data
            this.city=data.city
            this.swiperList=data.swiperList
            this.iconList=data.iconList
            this.recommendList=data.recommendList
            this.hotList=data.hotList

          }
        },

        // ...mapActions(['getHomeInfo'])
      },
      mounted(){
        this.getHomeInfo()
        // this.getHomeInfo()
      }
    }
</script>

<style rel="stylesheet/stylus">

</style>
