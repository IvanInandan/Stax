import { useState, useImperativeHandle, forwardRef } from "react";

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  // Create two divs and assign them each the other style variable
  const hideWhenVisible = { display: visible ? "none" : "" }; // Will set display: none (hide) if visible is false
  const showWhenVisible = { display: visible ? "" : "none" }; // Will show is visible is true

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // Allows you to use toggleVisibility outside of Togglable component file (ie: in app.jsx file)
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>

      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  );
});

export default Togglable;
