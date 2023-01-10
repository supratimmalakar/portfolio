import React from "react";

const AbsoluteWrapper = ({ children, bgColor }) => {
  return <div style={{ position: "absolute", width: "100vw", height : "100vh", background : bgColor }}>{children}</div>;
};

export default AbsoluteWrapper;
