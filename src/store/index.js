import { createStore, compose } from "redux";
import reducer from "./reducer";

// 配置以后就可以使用浏览器的react插件进行调试
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;