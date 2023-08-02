import React from "react";
export default function MyCheckBox(props) {
  return (
    <input type="checkbox" onClick={props.onClick} checked={props.checked} />
  );
}
