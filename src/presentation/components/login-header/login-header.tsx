import React, { memo } from "react";
import Logo from "../logo/logo";
const Styles = require("./login-header-styles.module.scss");

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  );
};

export default memo(LoginHeader);
