import React, { Component } from "react";
import { ShimmerPostList } from "react-shimmer-effects";

class ShimmerLoader extends Component {
  render() {
    return <ShimmerPostList  postStyle="STYLE_FOUR" col={4} row={4} gap={20} />;
  }
}

export default ShimmerLoader;
