import React, { Component } from "react";
import HeaderCss from "./header.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';

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
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);