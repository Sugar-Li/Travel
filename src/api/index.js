/*
与后台交互
 */

import ajax from './ajax'

// 1.获取首页纤细
export const reqHomeInfo=ajax('/api/index.json')
