<template>
  <div>
    <Hearder/>
    <Search/>
    <List/>
    <Alphabet/>
  </div>
</template>

<script>
  import Hearder from './components/Header.vue'
  import Search from './components/Search.vue'
  import List from './components/List.vue'
  import Alphabet from './components/Alphabet.vue'

  export default {
    components: {
      Hearder,
      Search,
      List,
      Alphabet
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
