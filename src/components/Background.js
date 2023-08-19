// components/background.js
import React from "react";

const Background = ({ backgroundImage, children }) => {
  return (
    <div
      style={{
        background: `url('${backgroundImage}') center/cover no-repeat fixed`,
        // Add any other styles for the background container if needed
        // For example, setting width, height, padding, etc.
      }}
    >
      {children}
    </div>
  );
};

export default Background;
