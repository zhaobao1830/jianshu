import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from '../common/header/store'

// 使用combineReducers整合单独组件的reducer数据
// 使用redux-immutable中的combineReducers，生成的就是immutable对象
export default combineReducers({
  header: headerReducer
})