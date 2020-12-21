import React from "react";

const PrivateLayout: React.FC = (props) => {
  return (
    <>
      private lay out with nested children
      <main>{props.children}</main>
    </>
  );
};

export default PrivateLayout;
