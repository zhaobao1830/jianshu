import * as constants from './constants'
import { fromJS } from "immutable";

// 用fromJS把js对象转换成immutable对象
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // 这种写法要手动保证state的数据不被修改，比较麻烦
    // 所以引入了immutable

    // return {
    //   focused: true
    // }

    // immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    // return {
    //   focused: false
    // }

    return state.set('focused', false)
  }
  return state;
}