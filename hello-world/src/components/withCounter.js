import React from "react";

const UpdatedComponent = (WrappedComponent, incrementNumber = 1) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    countHandler = () =>
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          countHandler={this.countHandler}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default UpdatedComponent;
