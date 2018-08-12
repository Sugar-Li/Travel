
import Vue from 'vue'

import {
  GET_HOME_INFO
}
  from './mutations-types'

export default({
  [GET_HOME_INFO](state,{homeInfo}){
    state.homeInfo=homeInfo
  }
})


