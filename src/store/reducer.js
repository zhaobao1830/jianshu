import { combineReducers } from "redux";
import { reducer as headerReducer } from '../common/header/store'

// 使用combineReducers整合单独组件的reducer数据
export default combineReducers({
  header: headerReducer
})