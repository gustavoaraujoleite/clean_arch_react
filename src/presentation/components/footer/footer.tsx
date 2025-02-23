import React, { memo } from "react";
const Styles = require("./footer-styles.module.scss");

const Footer: React.FC = () => {
  return <footer className={Styles.footer} />;
};

export default memo(Footer);
