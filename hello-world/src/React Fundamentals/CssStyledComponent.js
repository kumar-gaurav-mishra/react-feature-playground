import React, { Component } from "react";
import "./styles.css";
import styles from "./styles.module.css";
class CssStyledComponent extends Component {
  render() {
    return (
      <div className="primary" style={{ color: "red" }}>
        <h1 className={styles.secondary}>Modules Styles</h1>
      </div>
    );
  }
}

export default CssStyledComponent;
