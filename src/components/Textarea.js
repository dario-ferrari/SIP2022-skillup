import React from "react";

const Textarea = ({ type, placeholder, className, onChange }) => {
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={`resize-none p-0.5 pl-2 border-primary focus:outline-none focus:border-secondary border-2 rounded-md ${className}`}
    ></textarea>
  );
};

export default Textarea;
