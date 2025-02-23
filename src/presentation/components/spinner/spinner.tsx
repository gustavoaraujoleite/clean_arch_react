import React from "react";
const Styles = require("./spinner-styles.module.scss");

type Props = React.HTMLAttributes<HTMLElement>;

const Spinner: React.FC<Props> = (props: Props) => {
  return (
    <div className={[Styles.spinner, props.className].join(" ")}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
