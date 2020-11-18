import React, { Component } from "react";
import HeaderCss from "./header.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={HeaderCss.header}>
        <a className={HeaderCss.logo}/>
        <div className={HeaderCss.nav}>
          <div className={HeaderCss.navItem}>首页</div>
          <div className={HeaderCss.navItem}>下载App</div>

         <CSSTransition
           in={this.props.focused}
           timeout={200}
            >
              <div className={HeaderCss.inputDiv}>
                <input
                  className={HeaderCss.input}
                  placeholder={'搜索'}
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.props.handleInputBlur}
                />
              </div>
          </CSSTransition>
          <div className={HeaderCss.navItem}>登录</div>
          <div className={HeaderCss.navItem}>Aa</div>
        </div>
        <div className={HeaderCss.button}>登录</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // 因为总的reducer.js里使用了combineReducers，所以state里的focused就变成了state下header里的focused
    // 使用react插件可以看
    // focused: state.header.focused

    // reduce.js文件里使用immutable对state里的数据进行了封装
    // state是js对象，header是immutable对象
    // 为了统一，引入redux-immutable插件，都变成immutable对象
    // focused: state.header.get('focused')
    focused: state.get('header').get('focused')
    // 还有一种写法
    // focused: state.getIn(['header'], ['focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = actionCreators.searchFocus();
      dispatch(action)
    },
    handleInputBlur () {
      const action = actionCreators.searchBlur();
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);