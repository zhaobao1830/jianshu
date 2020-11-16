import React from "react";
import HeaderCss from "./header.module.css";

function header () {
  return (
    <div className={HeaderCss.header}>
      <a className={HeaderCss.logo}></a>
      <div className={HeaderCss.nav}>
        <div className={HeaderCss.navItem}>首页</div>
        <div className={HeaderCss.navItem}>下载App</div>
        <div className={HeaderCss.navItem}>登录</div>
        <div className={HeaderCss.navItem}>Aa</div>
      </div>
      <div className={HeaderCss.button}>登录</div>
    </div>
  )
}

export default header;