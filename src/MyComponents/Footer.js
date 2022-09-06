import React from "react";

export const Footer = () => {
  let footerStyle = {
    // position: "relative",
    // top: "60vh",
    // width: "100%"
  };
  return (
    <div className="bg-dark text-light py-4" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
    </div>
  );
};
