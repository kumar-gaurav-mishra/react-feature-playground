import React, { Component } from "react";

export default class ErrorBoundaryErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error, state) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Something went wrong.</h1>
        </div>
      );
    } else {
      // You can render any custom fallback UI
      return this.props.children;
    }
  }
}
