import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// Not currently in use in project, but code could be useful later
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
