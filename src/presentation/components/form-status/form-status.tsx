import React from "react";
import Spinner from "../spinner/spinner";
const Styles = require("./form-status-styles.module.scss");

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  );
};

export default FormStatus;
