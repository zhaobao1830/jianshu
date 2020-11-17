import React, { Component } from "react";
import HeaderCss from "./header.module.css";
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={HeaderCss.header}>
        <a className={HeaderCss.logo}></a>
        <div className={HeaderCss.nav}>
          <div className={HeaderCss.navItem}>首页</div>
          <div className={HeaderCss.navItem}>下载App</div>

         <CSSTransition
           in={true}
           timeout={200}
            >
              <div className={HeaderCss.inputDiv}>
                <input className={HeaderCss.input} placeholder={'搜索'}/>
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

export default Header;