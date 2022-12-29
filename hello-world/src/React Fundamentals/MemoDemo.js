import React, { memo } from "react";

function MemoDemo({ name }) {
  console.log("rendered");
  return <div>{name}</div>;
}

export default memo(MemoDemo); //Re rendering is not happening here due to using memo
// export default MemoDemo;
