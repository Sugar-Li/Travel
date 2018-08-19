<template>
  <div>
    <Hearder/>
    <Search/>
    <List :cities="cities" :hotCities="hotCities" :letter="letter"/>
    <Alphabet :cities="cities"
    @change="handleLetterChange"
    />
  </div>
</template>

<script>
  import Hearder from './components/Header.vue'
  import Search from './components/Search.vue'
  import List from './components/List.vue'
  import Alphabet from './components/Alphabet.vue'
  import axios from 'axios'

  export default {
    components: {
      Hearder,
      Search,
      List,
      Alphabet
    },
    data(){
      return{
        hotCities:[],
        cities:{},
        letter:''
      }
    },
    methods:{
      getCityInfo(){
        axios.get('/api/city.json').then(this.getCityInfoSucc)
      },
      getCityInfoSucc(res){
        res=res.data
        if (res.ret&& res.data) {
          const data=res.data
          this.city=data.city
          this.hotCities=data.hotCities
          this.cities=data.cities
        }
      },
      handleLetterChange(e){
        this.letter=e
      }

      // ...mapActions(['getHomeInfo'])
    },
    mounted(){
      this.getCityInfo()
      // this.getHomeInfo()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
