import {
  GET_HOME_INFO
}
  from './mutations-types'

import {reqHomeInfo} from '../api'


export default {
  async getHomeInfo({commit}) {
    const result = await reqHomeInfo()
    if (result.code === 0) {//成功
      const homeInfo = result.data
      commit(GET_HOME_INFO, {homeInfo})
    }
  },

  }
